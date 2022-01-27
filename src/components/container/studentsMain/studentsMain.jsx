import React from 'react';
import StudentsMainSection from '../mainSection/studentsMainSection';
import StudentsAside from '../studentsAside/studentsAside';
import './studentsMain.css'

const StudentsMain = () => {
  return (
    <main className='students-main'>
      <div className='students-main-container'>
        <StudentsMainSection></StudentsMainSection>
        <StudentsAside></StudentsAside>
      </div>
      
    </main>
  );
}

export default StudentsMain;
