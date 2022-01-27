import React from 'react';
import './uploadFile.css'
import RoundedButton from '../roundedButton/roundedButton';

const UploadFile = (props) => {
  return (
    <div className='upload-file-container'>
    <p>{props.name}</p>
    <div className='upload-file-button-bar'>
      <RoundedButton title={props.title} upload={props.upload} 
      disabled={props.disable}/>
      <div className='upload-specification'>
        <p>Archivos soportados: <span className='files-supported'>
          {props.supported}
        </span></p>
        <p>Tamaño de archivo máximo: <span className='max-size'>
          {props.fileSize}
        </span></p>
      </div>
    </div>
      
    </div>
  );
}

export default UploadFile;
