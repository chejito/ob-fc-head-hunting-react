import React from 'react';
import './addStudentButton.css'

const AddStudentButton = () => {
  return (
    <button className='add-student-button'>
      <span className='material-icons'>
        add
      </span>
      Añadir alumnos
    </button>
  );
}

export default AddStudentButton;
