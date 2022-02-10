import React from 'react';
import './profileResumeeView.css'

const ProfileResumeeView = ({resumeeUrl}) => {
  
  return (
    <iframe src={resumeeUrl} frameBorder='0' title='pdf-viewer' className='pdf-viewer'></iframe>
  );
}

export default ProfileResumeeView;
