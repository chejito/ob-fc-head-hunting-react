import React, { useEffect, useState } from 'react';
import StudentsHeader from '../../components/container/studentsHeader/studentsHeader';
import StudentsMain from '../../components/container/studentsMain/studentsMain';
import { getAllPagedStudents } from '../../services/StudentsService';
import StudentProfile from '../studentProfile/studentProfile';
import './students.css'
import AddStudent from '../addStudent/addStudent';

const Students = ({userState, updateUser, studentsState, updateStudents}) => {  
  
  const initialState = {
    countries: [], 
    tags: []
  }

  const [utils, setUtils] = useState(initialState);

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }
  
  const closeModal = () => {
    setModalIsOpen(false)
  }  

  useEffect(() => {
    obtainStudents()
  }, []);

  const obtainStudents = (page=1) => {
    let token = sessionStorage.getItem('token')

    getAllPagedStudents(page, token)
      .then((response) => {
        updateStudents(
          {
            studentList: response.data.students,
            totalStudents: response.data.totalItems,
            studentsPerPage: response.data.studentsPerPage,
            totalPages: response.data.totalPages,
            page: response.data.currentPage,
            selectedStudent: null
          }
        )
      })
      .catch((error) => {
        alert(`Error while retrieving the students: ${error}`)
      })
  }  


  return (
    <div className='students-container'>
      {studentsState.selectedStudent ? 
      (<StudentProfile
        userState={userState}
        updateUser={updateUser} 
        studentsState={studentsState} 
        updateStudents={updateStudents}
        utils={utils}/>)
      :
      modalIsOpen ? 
        (
          <AddStudent closeModal={closeModal} userState={userState}/>
        )
        :        
        (<div>
          <StudentsHeader 
            userState={userState}
            updateUser={updateUser} />
          <StudentsMain 
            studentsState={studentsState} 
            updateStudents={updateStudents} 
            openModal={openModal}
            obtainStudents={obtainStudents}
            />
        </div>)}
    </div>    
  );
}

export default Students;
