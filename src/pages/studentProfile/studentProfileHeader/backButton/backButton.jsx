import React from 'react';
import './backButton.css'

const BackButton = () => {
  return (
    <button className='back-button'>
      <span className='material-icons back-icon'>
        arrow_back
      </span>
      <p>Volver</p>
    </button>
  );
}

export default BackButton;
