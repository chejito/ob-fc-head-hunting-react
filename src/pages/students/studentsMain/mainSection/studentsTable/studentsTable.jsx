import React from 'react';
import './studentsTable.css'
import Studentstablebody from './studentsTableBody/studentsTableBody';
import StudentsTableHead from './studentsTableHead/studentsTableHead';

const StudentsTable = () => {

  return (
    <table className='students-table'>
      <StudentsTableHead></StudentsTableHead>
      <Studentstablebody></Studentstablebody>    
    </table>
  );
}

export default StudentsTable;
