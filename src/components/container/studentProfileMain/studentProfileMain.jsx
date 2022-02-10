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
      <ProfileResumeeView resumeeUrl={studentsState.selectedStudent.resumeeUrl} />
    </main>
  );
}

export default StudentProfileMain;
