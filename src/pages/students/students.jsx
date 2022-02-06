import React, { useState, useEffect, createContext } from 'react';
import StudentsHeader from '../../components/container/studentsHeader/studentsHeader';
import StudentsMain from '../../components/container/studentsMain/studentsMain';
import { getAllPagedStudents } from '../../services/StudentsService'; 
import StudentProfile from '../studentProfile/studentProfile';
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

  const obtainStudents = (page=1) => {
    let token = sessionStorage.getItem('token')

    getAllPagedStudents(page, token)
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


  return (
    <div className='students-container'>
      {studentsState.selectedStudent ? 
      (<StudentProfile student={studentsState.selectedStudent} updateStudents={updateStudents}/>)
      :
      (<div>
        <StudentsHeader/>
        <StudentsMain studentsState={studentsState} updateStudents={updateStudents}/>
      </div>)}
    </div>    
  );
}

export default Students;
