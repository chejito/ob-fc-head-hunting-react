import React from 'react';
import AddStudentButtonBar from '../addStudentButtons/addStudentButtons';
import AddStudentForm from '../addStudentForm/addStudentForm';
import './addStudentMain.css'

const AddStudentMain = ({closeModal}) => {
  return (
    <main className='add-student-main'>
      <div className='add-student-form-header'>
        <p>Nuevo Alumno</p>
        <span className='material-icons close-icon' 
          onClick={(e) => {
            e.preventDefault()
            closeModal()
          }}>
          close
        </span>
      </div>
      <AddStudentForm/>
      <AddStudentButtonBar closeModal={closeModal}/>
    </main>
  );
}

export default AddStudentMain;
