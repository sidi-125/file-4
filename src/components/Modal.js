// components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, degree }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{degree.title}</h2>
        <p>{degree.details}</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default Modal;
