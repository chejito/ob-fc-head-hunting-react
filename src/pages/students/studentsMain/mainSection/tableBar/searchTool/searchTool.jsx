import React from 'react';
import './searchTool.css'

const SearchTool = () => {
  return (
    <div className='search-tool'>
        <p>Alumnos</p>
        <div className='search-tool-field'>
          <button>
            <span className='material-icons'>search</span>
          </button>        
          <input placeholder='Buscar por Nombre, Email o Palabra clave...'/>
        </div>
                
      </div>  
  );
}

export default SearchTool;
