import React, { useState } from 'react';
import '../Home/Home.css';
import profileImg from '../../assets/profile.png';

function Hero() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
    setShowModal(false);
  };

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-name">Sidra Tufail</h1>
        <div className="typewriter-container">
          <p className="hero-bio">
            <span className="typewriter">I am a passionate Frontend Developer</span>
          </p>
        </div>
        <p className="hero-para">
          I specialize in building responsive, user-friendly web applications using the latest technologies.
        </p>
        <button className="hero-btn" onClick={() => setShowModal(true)}>Get in Touch</button>
      </div>

      <div className="hero-right">
      <img src={profileImg} alt="Sidra Tufail" className="hero-img" />


      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" required />
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />
              <label>Message:</label>
              <textarea rows="4" placeholder="Type your message" required />
              <button type="submit" className="submit-btn">Submit</button>
              <button type="button" className="go-back-btn" onClick={() => setShowModal(false)}>Go Back</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
