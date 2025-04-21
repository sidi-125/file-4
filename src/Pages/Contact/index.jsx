import React from 'react';
import '../Contact/Contact.css';
import { FaFacebook,  FaTiktok, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div>
      {/* Animated Heading at the Top */}
      <h1 className="contact-heading-animated">Get in Touch</h1>

      <div className="contact-section">
        {/* Left Side */}
        <div className="contact-left">
          <p>If you have any questions or projects, let's connect!</p>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <button
            className="intro-button"
            onClick={() =>
              window.open('https://www.youtube.com/watch?v=5FLtmVe8XNk', '_blank')
            }
          >
            Watch My Intro Video
          </button>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="hhttps://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
