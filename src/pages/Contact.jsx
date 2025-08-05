import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="terminal">
      <div className="flex-row">
        <form className="contact-form">
          <input type="text"    placeholder="Your Name" required />
          <input type="email"   placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" />
          <button type="submit">Send Message</button>
        </form>

        <aside className="contact-info">
          <h4>Contact Info</h4>
          <p>Email: ghadigaonkargargi@gmail.com</p>
          <p>Phone: +1 (530) 715-5928</p>
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/gargi" target="_blank">
              linkedin.com/in/gargi
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/gargi" target="_blank">
              github.com/gargi
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}