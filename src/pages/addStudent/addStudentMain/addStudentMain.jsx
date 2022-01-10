import React from 'react';
import AddStudentButtonBar from './addStudentButtons/addStudentButtons';
import AddStudentForm from './addStudentForm/addStudentForm';
import './addStudentMain.css'

const AddStudentMain = () => {
  return (
    <main className='add-student-main'>
      <div className='add-student-form-header'>
        <p>Nuevo Alumno</p>
        <span className='material-icons close-icon'>
          close
        </span>
      </div>
      <AddStudentForm/>
      <AddStudentButtonBar/>
    </main>
  );
}

export default AddStudentMain;
