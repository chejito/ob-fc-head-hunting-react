import React from 'react';
import './studentProfile.css'
import StudentProfileHeader from '../../components/container/studentProfileHeader/studentProfileHeader';
import StudentProfileMain from '../../components/container/studentProfileMain/studentProfileMain';

const StudentProfile = ({userState, updateUser, studentsState, updateStudents}) => {
  return (
    <div className='student-profile-container'>
      <StudentProfileHeader 
        userState={userState} 
        updateUser={updateUser} 
        studentsState={studentsState} 
        updateStudents={updateStudents}/>
      <StudentProfileMain 
        studentsState={studentsState} 
        updateStudents={updateStudents}
        />
    </div>
  );
}

export default StudentProfile;
