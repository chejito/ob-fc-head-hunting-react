import React from 'react';
import UserDisplay from '../../pure/userDisplay/userDisplay';
import BackButton from '../../pure/backButton/backButton';
import './studentProfileHeader.css'

const StudentProfileHeader = () => {
  return (
    <div className='student-profile-header'>
      <BackButton></BackButton>
      <UserDisplay></UserDisplay>
    </div>
  );
}

export default StudentProfileHeader;
