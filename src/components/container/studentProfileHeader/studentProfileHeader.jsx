import React from 'react';
import UserDisplay from '../../pure/userDisplay/userDisplay';
import BackButton from '../../pure/backButton/backButton';
import './studentProfileHeader.css'

const StudentProfileHeader = ({userState, updateUser, studentsState, updateStudents}) => {
  return (
    <div className='student-profile-header'>
      <BackButton studentsState={studentsState} updateStudents={updateStudents}/>
      <UserDisplay userState={userState} updateUser={updateUser}/>
    </div>
  );
}

export default StudentProfileHeader;
