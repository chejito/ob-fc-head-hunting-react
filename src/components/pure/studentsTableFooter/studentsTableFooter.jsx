import React from 'react';
import './studentsTableFooter.css'

const StudentsTableFooter = ({totalStudents}) => {

  const pages = Math.ceil(totalStudents / 12)

  return (
    <tfoot className='students-table-footer'>
      <tr className='students-table-footer-row'>
        <td className='col1'>
          { `${totalStudents} alumnos en total` }
        </td>
        <td className='col-page' colSpan='5'>
          <span className='actual-page'>1</span> de { pages }
          <span className='material-icons next-icon'>
            navigate_next
          </span>  
        </td>        
      </tr>
    </tfoot>
  );
}

export default StudentsTableFooter;
