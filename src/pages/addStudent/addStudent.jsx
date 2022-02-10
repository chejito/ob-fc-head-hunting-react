import React from 'react';
import './addStudent.css'
import AddStudentMain from '../../components/container/addStudentMain/addStudentMain';

const AddStudent = ({closeModal, userState}) => {
  return (
    <div className='add-student-container'>
      <AddStudentMain closeModal={closeModal} userState={userState}/>
    </div>
  );
}

export default AddStudent;
