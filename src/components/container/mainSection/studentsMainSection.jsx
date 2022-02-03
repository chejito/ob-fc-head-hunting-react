import React from 'react';
import './studentsMainSection.css'
import StudentsTable from '../studentsTable/studentsTable';
import TableBar from '../tableBar/tableBar';

const StudentsMainSection = ({students, updateStudents}) => {
  return (
    <section className='students-main-section'>
      <TableBar/>
      <StudentsTable students={students} updateStudents={updateStudents}/>
    </section>
  );
}

export default StudentsMainSection;
