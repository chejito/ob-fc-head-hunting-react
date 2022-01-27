import React from 'react';
import AddStudentButton from '../../pure/addStudentButton/addStudentButton';
import SearchTool from '../../pure/searchTool/searchTool';
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
