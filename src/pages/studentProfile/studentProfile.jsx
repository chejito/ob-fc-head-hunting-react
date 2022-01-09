import React from 'react';
import './studentProfile.css'
import StudentProfileHeader from './studentProfileHeader/studentProfileHeader';
import StudentProfileMain from './studentProfileMain/studentProfileMain';

const StudentProfile = () => {
  return (
    <div className='student-profile-container'>
      <StudentProfileHeader></StudentProfileHeader>
      <StudentProfileMain></StudentProfileMain>
    </div>
  );
}

export default StudentProfile;
