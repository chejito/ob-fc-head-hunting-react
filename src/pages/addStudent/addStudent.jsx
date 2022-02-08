import React from 'react';
import './addStudent.css'
import AddStudentMain from '../../components/container/addStudentMain/addStudentMain';

const AddStudent = ({closeModal}) => {
  return (
    <div className='add-student-container'>
      <AddStudentMain closeModal={closeModal}/>
    </div>
  );
}

export default AddStudent;
