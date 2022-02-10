import React, { useState } from 'react';
import './uploadFile.css'
import RoundedButton from '../roundedButton/roundedButton';
import { uploadToCloud } from '../../../services/FileService'

const UploadFile = ({name, title, upload, disable, supported, accepted, fileSize, update, fileType}) => {

  const [clicked, setClicked] = useState(false);

  const click = (e) => {
    e.preventDefault()
    setClicked(true)
  }

  const uploadFile = (e) => {
    e.preventDefault()
    const files = Array.from(e.target.files)
    const file = files[0]
    console.log(file.name)
    let formData = new FormData()
    formData.append('file', file, file.name )
    let token = sessionStorage.getItem('token')


    uploadToCloud(formData, token, fileType)
      .then((response) => {
        update(response.data.urlFile)
      })
      .catch((error) => {
        alert(`Error while uploading the file: ${error}`)
      })

  }

  return (
    <div className='upload-file-container'>
    <p>{name}</p>
    
      {clicked ? 
      (       
        <div className='upload-file-button-bar'>
          <input
            id={name}
            type='file'
            accept={accepted}
            onChange={uploadFile}/>
        </div>
      )
      :
      (
        <div className='upload-file-button-bar'>
          <RoundedButton title={title} upload={upload} 
          disabled={disable} onClick={(e) => click(e)}/>
          <div className='upload-specification'>
            <p>Archivos soportados: <span className='files-supported'>
              {supported}
            </span></p>
            <p>Tamaño de archivo máximo: <span className='max-size'>
              {fileSize}
            </span></p>
          </div>
        </div>
      )
      }
      
    
      
    </div>
  );
}

export default UploadFile;
