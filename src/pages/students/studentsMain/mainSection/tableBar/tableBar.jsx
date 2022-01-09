import React from 'react';
import AddStudentButton from './addStudentButton/addStudentButton';
import SearchTool from './searchTool/searchTool';
import './tableBar.css'

const TableBar = () => {
  return (
    <div className='table-bar'>
      <SearchTool></SearchTool>
      <AddStudentButton></AddStudentButton>      
    </div>
  );
}

export default TableBar;
