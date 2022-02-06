import React from 'react';
import StudentsMainSection from '../mainSection/studentsMainSection';
import StudentsAside from '../studentsAside/studentsAside';
import './studentsMain.css'

const StudentsMain = ({studentsState, updateStudents}) => {
  return (
    <main className='students-main'>
      <div className='students-main-container'>
        <StudentsMainSection studentsState={studentsState} updateStudents={updateStudents}/>
        <StudentsAside/>
      </div>    
    </main>
  );
}

export default StudentsMain;
