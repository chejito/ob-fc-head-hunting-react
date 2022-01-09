import React from 'react';
import './studentsTable.css'
import StudentsTableBody from './studentsTableBody/studentsTableBody';
import StudentsTableHead from './studentsTableHead/studentsTableHead';
import { students } from '../../../../../data/students';
import StudentsTableFooter from './studentsTableFooter/studentsTableFooter';

const StudentsTable = () => {

  let totalStudents = students.length
  let studentsToShow = []
  
  for (let i = 0; i < 12; i++) {
    studentsToShow.push(students[i])
  }


  return (
    <table className='students-table'>
      <StudentsTableHead></StudentsTableHead>
      <StudentsTableBody students={studentsToShow}></StudentsTableBody>
      <StudentsTableFooter totalStudents={totalStudents}></StudentsTableFooter>
    </table>
  );
}

export default StudentsTable;
