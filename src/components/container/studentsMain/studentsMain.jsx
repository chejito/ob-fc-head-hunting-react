import React from 'react';
import StudentsMainSection from '../mainSection/studentsMainSection';
import StudentsAside from '../studentsAside/studentsAside';
import './studentsMain.css'

const StudentsMain = ({students, updateStudents}) => {
  return (
    <main className='students-main'>
      <div className='students-main-container'>
        <StudentsMainSection students={students} updateStudents={updateStudents}></StudentsMainSection>
        <StudentsAside></StudentsAside>
      </div>    
    </main>
  );
}

export default StudentsMain;
