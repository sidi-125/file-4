import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
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

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sr. No.</strong></TableCell>
              <TableCell><strong>Degree</strong></TableCell>
              <TableCell><strong>Institution</strong></TableCell>
              <TableCell><strong>Year</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.degree}</TableCell>
                <TableCell>{item.institution}</TableCell>
                <TableCell>{item.year}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => openModal(item)}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
