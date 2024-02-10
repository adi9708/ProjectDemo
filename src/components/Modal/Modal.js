import React from 'react';
import './Modal.css'; // Importing CSS for styling the modal

// Modal component definition
const Modal = ({ children, onClose }) => (
  <div className="modalBackdrop">
    <div className="modalContent">
      <h2>You have Selected</h2>
      <p>{children}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Modal;
