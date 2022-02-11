import React from 'react';
import ProfileMainSection from '../profileMainSection/profileMainSection';
import ProfileResumeeView from '../../pure/profileResumeeView/profileResumeeView';
import './studentProfileMain.css'

const StudentProfileMain = ({ studentsState }) => {
  return (
    <main className='profile-main'>
      <ProfileMainSection 
        student={studentsState.selectedStudent}
        />
      <ProfileResumeeView resumeeUrl={studentsState.selectedStudent.resumeeUrl} />
    </main>
  );
}

export default StudentProfileMain;
