import React from 'react';
import './studentsMainSection.css'
import StudentsTable from './studentsTable/studentsTable';
import TableBar from './tableBar/tableBar';

const StudentsMainSection = () => {
  return (
    <section className='students-main-section'>
      <TableBar></TableBar>
      <StudentsTable></StudentsTable>
    </section>
  );
}

export default StudentsMainSection;
