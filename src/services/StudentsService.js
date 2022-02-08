export const getAllPagedStudents = async (page, token) => {
  
  let response = await fetch(`https://ob-fc-headhunt.herokuapp.com/api/students?page=${page}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  return response.json()
}