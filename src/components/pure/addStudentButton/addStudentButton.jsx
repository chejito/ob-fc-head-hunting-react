import React from 'react';
import './addStudentButton.css'

const AddStudentButton = ({openModal}) => {

const addStudent = (e) => {
  e.preventDefault()
  openModal()
}

  return (
    <button className='add-student-button' 
      onClick={(e) => addStudent(e)}>
      <span className='material-icons'>
        add
      </span>
      Añadir alumnos
    </button>
  );
}

export default AddStudentButton;
