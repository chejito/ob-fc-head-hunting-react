import React from 'react';
import './backButton.css'

const BackButton = ({studentsState, updateStudents}) => {

  const goBack = () => {
    updateStudents(
      {
        ...studentsState,
        selectedStudent: null
      }
    )
  } 

  return (
    <button 
      className='back-button'
      onClick={(e) => {
        e.preventDefault()
        goBack()
      }}>
      <span className='material-icons back-icon'>
        arrow_back
      </span>
      <p>Volver</p>
    </button>
  );
}

export default BackButton;
