import axios from "axios"


export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    return axios.post('https://ob-fc-headhunt.herokuapp.com/api/auth/login', body)
    // return axios.post('http://localhost:8080/api/auth/login', body)
}

export const register = async (username, email, password, fullname) => {  
  
  let body = {
    username: username,
    email: email,
    password: password,
    fullname: fullname
  }

  console.log(body)
    
  let response = await fetch('https://ob-fc-headhunt.herokuapp.com/api/auth/register', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  
  return response.json()
}