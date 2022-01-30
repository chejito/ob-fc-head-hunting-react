export const login = async (email, password) => {  
  
  let body = {
    email: email,
    password: password
  }

  console.log(body)
    
  let response = await fetch('https://ob-fc-headhunt.herokuapp.com/api/auth/login', {
  // let response = await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  console.log('Response:', response)
  console.log('Status:', response.status)
  console.log('Ok?', response.ok)
  return response.json()
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
  // let response = await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  console.log('Response:', response)
  console.log('Status:', response.status)
  console.log('Ok?', response.ok)
  return response.json()
}