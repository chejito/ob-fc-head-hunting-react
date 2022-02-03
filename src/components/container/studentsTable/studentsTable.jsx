import React from 'react';
import './studentsTable.css'
import StudentsTableBody from '../studentsTableBody/studentsTableBody';
import StudentsTableHead from '../../pure/studentsTableHead/studentsTableHead';
import { students } from '../../../data/students';
import StudentsTableFooter from '../../pure/studentsTableFooter/studentsTableFooter';

const StudentsTable = ({students, updateStudents}) => {  
  
  return (
    <table className='students-table'>
      <StudentsTableHead></StudentsTableHead>
      <StudentsTableBody students={students} updateStudents={updateStudents}></StudentsTableBody>
      <StudentsTableFooter totalStudents={students.length}></StudentsTableFooter>
    </table>
  );
}

export default StudentsTable;
