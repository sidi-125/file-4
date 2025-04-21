import React, { useState } from 'react';
import '../Contact/Contact.css';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
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
          {!showVideo ? (
            <button className="intro-button" onClick={() => setShowVideo(true)}>
              Watch My Intro Video
            </button>
          ) : (
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/5FLtmVe8XNk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="back-button" onClick={() => setShowVideo(false)}>
                Back
              </button>
            </div>
          )}

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
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
