import React from 'react';
import './PrimaryButton.css'; // Для стилізації кнопки

const PrimaryButton = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      className={`primary-button ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
