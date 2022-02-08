import React from 'react';
import AddStudentButton from '../../pure/addStudentButton/addStudentButton';
import SearchTool from '../../pure/searchTool/searchTool';
import './tableBar.css'

const TableBar = ({openModal}) => {
  return (
    <div className='table-bar'>
      <SearchTool></SearchTool>
      <AddStudentButton openModal={openModal}/>
    </div>
  );
}

export default TableBar;
