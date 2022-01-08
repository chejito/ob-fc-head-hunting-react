import React from 'react';
import StudentsHeader from '../components/containers/studentsHeader';
import StudentsMain from '../components/containers/studentsMain';
import '../styles/students.css'

const Students = () => {
  return (
    <div className='students-container'>
      <StudentsHeader></StudentsHeader>
      <StudentsMain></StudentsMain>
    </div>
  );
}

export default Students;
