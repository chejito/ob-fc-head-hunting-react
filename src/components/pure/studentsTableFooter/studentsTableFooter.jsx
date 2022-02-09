import React from 'react';
import './studentsTableFooter.css'

const StudentsTableFooter = ({studentsState, obtainStudents}) => {

  console.log(studentsState)
  
  const totalStudents = studentsState.totalStudents
  const totalPages = studentsState.totalPages
  const actualPage = studentsState.page
  const studentsNumber = studentsState.studentList.length

  const backPage = (e) => {
    e.preventDefault()
    obtainStudents(actualPage - 1)
  }

  const forwardPage = (e) => {
    e.preventDefault()
    obtainStudents(actualPage + 1)
  }

  return (
    <tfoot className='students-table-footer'>
      <tr className='students-table-footer-row'>
        <td className='col1'>
          { `${ studentsNumber } de ${ totalStudents } alumnos en total` }
        </td>
        <td className='col-page' colSpan='5'>
          {actualPage !== 1 ? 
          (<span className='material-icons before-icon' onClick={(e) => backPage(e)}>
            navigate_before
          </span>)
          :
          null }          
          <span className='actual-page'>{ actualPage }</span> de { totalPages }
          {actualPage !== totalPages ? 
          (
          <span className='material-icons next-icon' onClick={(e) => forwardPage(e)}>
            navigate_next
          </span> 
          )
          :
          null} 
        </td>        
      </tr>
    </tfoot>
  );
}

export default StudentsTableFooter;
