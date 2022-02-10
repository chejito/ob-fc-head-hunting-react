import axios from "axios"

export const getAllPagedStudents = (page, token) => {
  
  return axios.get(`https://ob-fc-headhunt.herokuapp.com/api/students?page=${page}`, {
  // return axios.get(`http://localhost:8080/api/students?page=${page}`, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`  
    }  
  
  })
}

export const createStudent = (student, token) => {

  // return axios.post('http://localhost:8080/api/students', student, {
  return axios.post('https://ob-fc-headhunt.herokuapp.com/api/students', student, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`  
    }  
  })
}
