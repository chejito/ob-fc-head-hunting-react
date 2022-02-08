import React from 'react';
import ProfileMainSection from '../profileMainSection/profileMainSection';
import ProfileResumeeView from '../../pure/profileResumeeView/profileResumeeView';
import './studentProfileMain.css'

const StudentProfileMain = ({studentsState, utils}) => {
  return (
    <main className='profile-main'>
      <ProfileMainSection 
        student={studentsState.selectedStudent}
        utils={utils} 
        />
      <ProfileResumeeView resumeUrl={studentsState.selectedStudent.resumeUrl} />
    </main>
  );
}

export default StudentProfileMain;
