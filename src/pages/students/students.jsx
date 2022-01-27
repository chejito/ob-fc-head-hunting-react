import React from 'react';
import StudentsHeader from '../../components/container/studentsHeader/studentsHeader';
import StudentsMain from '../../components/container/studentsMain/studentsMain';
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
