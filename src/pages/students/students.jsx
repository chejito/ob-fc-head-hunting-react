import React, { useState, useEffect } from 'react';
import StudentsHeader from '../../components/container/studentsHeader/studentsHeader';
import StudentsMain from '../../components/container/studentsMain/studentsMain';
import { getAllPagedStudents, getStudentProfile } from '../../services/StudentsService'; 
import './students.css'

const Students = ({updateUser}) => {

  const initialState = {
    studentList: [],
    totalStudents: 0,
    studentsPerPage: 12,
    totalPages: 1,
    page: 1,
    selectedStudent: null
  }

  const [studentsState, setStudentsState] = useState(initialState);

  const updateStudents = (newState) => {
    setStudentsState(newState)
  }
  
  useEffect(() => {
    obtainStudents()
  }, []);

  const obtainStudents = () => {
    let token = sessionStorage.getItem('token')

    getAllPagedStudents(1, token)
      .then((response) => {
        console.log('All students', response.students)
        updateStudents(
          {
            studentList: response.students,
            totalStudents: response.totalItems,
            studentsPerPage: response.studentsPerPage,
            totalPages: response.totalPages,
            page: response.currentPage,
            selectedStudent: null
          }
        )
      })
      .catch((error) => {
        alert(`Error while retrieving the students: ${error}`)
      })
      .finally(() => {
        console.log('Ended obtaining students:')
        console.table(studentsState.studentList)
      })
  }

  // const obtainStudentProfile = (fullname) => {
  //   getStudentProfile(fullname)
  //   .then((response) => {
  //       console.log('Student', response.student)
  //       setSelectedStudent(response.student)
  //     })
  //     .catch((error) => {
  //       alert(`Error while retrieving the student: ${error}`)
  //     })
  //     .finally(() => {
  //       console.log('Ended obtaining student:')
  //       console.table(selectedStudent)
  //     })
  // }


  return (
    <div className='students-container'>
      <StudentsHeader/>
      <StudentsMain students={studentsState.studentList} updateStudents={updateStudents}/>
    </div>
  );
}

export default Students;
