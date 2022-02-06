import React from 'react';
import './studentsMainSection.css'
import StudentsTable from '../studentsTable/studentsTable';
import TableBar from '../tableBar/tableBar';

const StudentsMainSection = ({studentsState, updateStudents}) => {
  return (
    <section className='students-main-section'>
      <TableBar/>
      <StudentsTable studentsState={studentsState} updateStudents={updateStudents}/>
    </section>
  );
}

export default StudentsMainSection;
