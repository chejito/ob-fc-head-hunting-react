import React from 'react';
import './profileResumeeView.css'
import itbunny_resumee from '../../../assets/pdfs/itbunny_resumee.pdf'

const ProfileResumeeView = () => {
  
  return (
    <iframe src={itbunny_resumee} frameBorder='0' title='pdf-viewer' className='pdf-viewer'></iframe>
  );
}

export default ProfileResumeeView;
