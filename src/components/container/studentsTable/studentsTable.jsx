import React from 'react';
import './studentsTable.css'
import StudentsTableBody from '../studentsTableBody/studentsTableBody';
import StudentsTableHead from '../../pure/studentsTableHead/studentsTableHead';
import StudentsTableFooter from '../../pure/studentsTableFooter/studentsTableFooter';

const StudentsTable = ({studentsState, updateStudents, obtainStudents}) => {  
  
  return (
    <table className='students-table'>
      <StudentsTableHead></StudentsTableHead>
      <StudentsTableBody studentsState={studentsState} updateStudents={updateStudents}/>
      <StudentsTableFooter studentsState={studentsState} obtainStudents={obtainStudents}/>
    </table>
  );
}

export default StudentsTable;
