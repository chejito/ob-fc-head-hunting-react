import React from 'react';
import './mainSection.css'
import StudentsTable from './studentsTable/studentsTable';
import TableBar from './tableBar/tableBar';

const MainSection = () => {
  return (
    <section className='students-main-section'>
      <TableBar></TableBar>
      <StudentsTable></StudentsTable>
    </section>
  );
}

export default MainSection;
