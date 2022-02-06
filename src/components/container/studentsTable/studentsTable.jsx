import React from 'react';
import './studentsTable.css'
import StudentsTableBody from '../studentsTableBody/studentsTableBody';
import StudentsTableHead from '../../pure/studentsTableHead/studentsTableHead';
import StudentsTableFooter from '../../pure/studentsTableFooter/studentsTableFooter';

const StudentsTable = ({studentsState, updateStudents}) => {  
  
  return (
    <table className='students-table'>
      <StudentsTableHead></StudentsTableHead>
      <StudentsTableBody studentsState={studentsState} updateStudents={updateStudents}></StudentsTableBody>
      <StudentsTableFooter totalStudents={studentsState.totalStudents}></StudentsTableFooter>
    </table>
  );
}

export default StudentsTable;
