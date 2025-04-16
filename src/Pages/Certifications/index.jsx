import React, { useState } from 'react';
import './Certifications.css';

function Certifications() {
  const [modalContent, setModalContent] = useState(null);

  const certifications = [
    {
      id: 1,
      title: 'React Developer Certification',
      provider: 'Coursera',
      year: '2023',
      details: 'Learned advanced React concepts including Hooks, Context API, and performance optimization.',
    },
    {
      id: 2,
      title: 'JavaScript Essentials',
      provider: 'Udemy',
      year: '2022',
      details: 'Covered core JavaScript, ES6+, async programming, and DOM manipulation.',
    },
    {
      id: 3,
      title: 'Frontend Development',
      provider: 'freeCodeCamp',
      year: '2021',
      details: 'Built multiple projects using HTML, CSS, and JavaScript.',
    },
  ];

  const openModal = (cert) => {
    setModalContent(cert);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <table className="certifications-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Provider</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((cert) => (
            <tr key={cert.id}>
              <td>{cert.id}</td>
              <td>{cert.title}</td>
              <td>{cert.provider}</td>
              <td>{cert.year}</td>
              <td>
                <button className="view-link" onClick={() => openModal(cert)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>{modalContent.title}</h2>
            <p><strong>Provider:</strong> {modalContent.provider}</p>
            <p><strong>Year:</strong> {modalContent.year}</p>
            <p><strong>Details:</strong> {modalContent.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
