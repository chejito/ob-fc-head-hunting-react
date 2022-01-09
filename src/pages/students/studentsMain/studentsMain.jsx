import React from 'react';
import MainSection from './mainSection/mainSection';
import StudentsAside from './studentsAside/studentsAside';
import './studentsMain.css'

const StudentsMain = () => {
  return (
    <main className='students-main'>
      <div className='students-main-container'>
        <MainSection></MainSection>
        <StudentsAside></StudentsAside>
      </div>
      
    </main>
  );
}

export default StudentsMain;
