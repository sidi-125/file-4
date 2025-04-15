import React, { useState } from 'react';
import '../Style.css/Certification.css';

const certifications = [
  {
    title: 'Web Development Certificate',
    issuer: 'FreeCodeCamp',
    date: 'March 2024',
    image: 'https://via.placeholder.com/600x400?text=Web+Development+Certificate'
  },
  {
    title: 'JavaScript Mastery',
    issuer: 'Coursera',
    date: 'January 2024',
    image: 'https://via.placeholder.com/600x400?text=JavaScript+Mastery+Certificate'
  },
  {
    title: 'React Basics',
    issuer: 'Udemy',
    date: 'February 2024',
    image: 'https://via.placeholder.com/600x400?text=React+Basics+Certificate'
  }
];

function CertificationSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certification-section">
      <h2 className="cert-heading">My Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <button className="cert-view-btn" onClick={() => setSelectedCert(cert)}>
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedCert(null)}>&times;</span>
            <h2>{selectedCert.title}</h2>
            <img src={selectedCert.image} alt="Certificate" className="cert-modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificationSection;
