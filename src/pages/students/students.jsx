import React, { useState, useEffect } from 'react';
import StudentsHeader from '../../components/container/studentsHeader/studentsHeader';
import StudentsMain from '../../components/container/studentsMain/studentsMain';
import { getAllPagedStudents, getStudentProfile } from '../../services/StudentsService'; 
import './students.css'

const Students = () => {

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [totalStudents, setTotalStudents] = useState(10);
  const [studentsPerPage, setStudentsPerPage] = useState(5);
  const [pages, setPages] = useState(1);

  
  useEffect(() => {
    obtainStudents()
  }, []);

  const obtainStudents = () => {
    let token = sessionStorage.getItem('token')

    getAllPagedStudents(1, token)
      .then((response) => {
        console.log('All students', response.students)
        setStudents(response.students)
        setPages(response.totalPages)
        setStudentsPerPage(response.studentsPerPage)
        setTotalStudents(response.totalItems)
      })
      .catch((error) => {
        alert(`Error while retrieving the students: ${error}`)
      })
      .finally(() => {
        console.log('Ended obtaining students:')
        console.table(students)
      })
  }

  const obtainStudentProfile = (fullname) => {
    getStudentProfile(fullname)
    .then((response) => {
        console.log('Student', response.student)
        setSelectedStudent(response.student)
      })
      .catch((error) => {
        alert(`Error while retrieving the student: ${error}`)
      })
      .finally(() => {
        console.log('Ended obtaining student:')
        console.table(selectedStudent)
      })
  }


  return (
    <div className='students-container'>
      <StudentsHeader></StudentsHeader>
      <StudentsMain></StudentsMain>
    </div>
  );
}

export default Students;
