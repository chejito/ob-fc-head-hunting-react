import React from 'react';
import './studentProfile.css'
import StudentProfileHeader from '../../components/container/studentProfileHeader/studentProfileHeader';
import StudentProfileMain from '../../components/container/studentProfileMain/studentProfileMain';

const StudentProfile = () => {
  return (
    <div className='student-profile-container'>
      <StudentProfileHeader></StudentProfileHeader>
      <StudentProfileMain></StudentProfileMain>
    </div>
  );
}

export default StudentProfile;
