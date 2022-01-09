import React from 'react';
import StudentsHeader from './studentsHeader/studentsHeader';
import StudentsMain from './studentsMain/studentsMain';
import './students.css'

const Students = () => {
  return (
    <div className='students-container'>
      <StudentsHeader></StudentsHeader>
      <StudentsMain></StudentsMain>
    </div>
  );
}

export default Students;
