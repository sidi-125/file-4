import React, { useState, useEffect } from 'react';
import '../Education/Education.css';

function Education() {
  const [modalContent, setModalContent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'XYZ University',
      year: '2020 - 2024',
      details: 'Studied core CS subjects like Data Structures, DBMS, and Web Development.',
    },
    {
      id: 2,
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'ABC College',
      year: '2018 - 2020',
      details: 'Focused on Mathematics, Physics, and Chemistry with top grades.',
    },
    {
      id: 3,
      degree: 'Matriculation (Science)',
      institution: 'City School',
      year: '2016 - 2018',
      details: 'Completed foundational science education.',
    },
    {
      id: 4,
      degree: 'Hafz e Quran',
      institution: 'Madrasa tul Madina',
      year: '2016 - 2018',
      details: 'Successfully memorized the entire Quran.',
    },
  ];

  const openModal = (item) => {
    setModalContent(item);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="education-section">
      <h2 className={`education-title ${isVisible ? 'visible' : ''}`}>Education</h2>
      <table className="education-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.degree}</td>
              <td>{item.institution}</td>
              <td>{item.year}</td>
              <td>
                <button className="view-link" onClick={() => openModal(item)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>{modalContent.degree}</h2>
            <p><strong>Institution:</strong> {modalContent.institution}</p>
            <p><strong>Year:</strong> {modalContent.year}</p>
            <p><strong>Details:</strong> {modalContent.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;
