import React from 'react';
import './studentsMainSection.css'
import StudentsTable from '../studentsTable/studentsTable';
import TableBar from '../tableBar/tableBar';

const StudentsMainSection = ({studentsState, updateStudents, openModal, obtainStudents}) => {
  return (
    <section className='students-main-section'>
      <TableBar openModal={openModal}/>
      <StudentsTable studentsState={studentsState} updateStudents={updateStudents} obtainStudents={obtainStudents}/>
    </section>
  );
}

export default StudentsMainSection;
