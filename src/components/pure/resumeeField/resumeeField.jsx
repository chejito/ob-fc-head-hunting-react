import React from 'react';
import './resumeeField.css'

const ResumeeField = ({resumeUrl}) => {
  return (
    <div className='resumee-container'>
      <p>Documento CV</p>
      <div className='resumee-buttons'>
        <div className='upload-resumee'>
          <span className='material-icons-outlined upload-resumee-icon'>cloud_upload</span>
          <p className='upload'>Subir de nuevo</p>
        </div>
      <div className='delete-resumee'>
        <span className='material-icons-outlined delete-resumee-icon'>delete</span>
        <p className='delete'>Borrar</p>
      </div>
    </div>
  </div>
  );
}

export default ResumeeField;
