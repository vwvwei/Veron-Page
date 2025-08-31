import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts.css';

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  // Change this to your site/brand name — used in emails
  const SITE_NAME = 'VwV Portfolio';

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    const form = formRef.current;
    const fd = new FormData(form);

    // Honeypot anti-spam (field is hidden; bots often fill it)
    if (fd.get('website')) return;

    const name = (fd.get('from_name') || '').trim();
    const email = (fd.get('reply_to') || '').trim();
    const message = (fd.get('message') || '').trim();

    // Basic validation
    if (!name || !email || !message) {
      setStatus({ type: 'error', msg: 'Please fill out all fields.' });
      return;
    }
    // Very simple email check
    const emailOk = /\S+@\S+\.\S+/.test(email);
    if (!emailOk) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' });
      return;
    }

    // Fill the hidden fields just before sending
    form.querySelector('input[name="site_name"]').value = SITE_NAME;
    form.querySelector('input[name="submitted_at"]').value =
      new Date().toLocaleString();
    form.querySelector('input[name="page_url"]').value = window.location.href;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        msg: 'Missing EmailJS configuration. Please set your .env values.',
      });
      console.error('Missing EmailJS env values:', {
        serviceId,
        templateId,
        publicKey,
      });
      return;
    }

    try {
      setSending(true);

      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });

      setStatus({
        type: 'success',
        msg: 'Thanks! Your message has been sent.',
      });
      form.reset(); // clear the form
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        msg: 'Sorry—something went wrong sending your message.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-inner">
        <h1 className="contact-heading">Contact</h1>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="contact-form"
          noValidate
        >
          {/* Honeypot (hidden) */}
          <input
            type="text"
            name="website"
            className="hp"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Hidden fields for the email template */}
          <input type="hidden" name="site_name" value="" />
          <input type="hidden" name="submitted_at" value="" />
          <input type="hidden" name="page_url" value="" />

          <label className="sr-only" htmlFor="from_name">
            Your Name
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            placeholder="Your Name"
            required
          />

          <label className="sr-only" htmlFor="reply_to">
            Email
          </label>
          <input
            id="reply_to"
            name="reply_to"
            type="email"
            placeholder="you@email.com"
            required
          />

          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Write your message…"
            required
          />

          <button
            type="submit"
            className="btn-gradient"
            disabled={sending}
            aria-busy={sending}
          >
            {sending ? 'Sending…' : 'Send Message'}
          </button>

          {status.msg && (
            <div
              className={`contact-alert ${
                status.type === 'success' ? 'ok' : 'err'
              }`}
              role="status"
              aria-live="polite"
            >
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
