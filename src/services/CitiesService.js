export const getAllCities = async (token) => {

  let body = {
    token: token
  }

  console.log(body)
  
  let response = await fetch('https://ob-fc-headhunt.herokuapp.com/api/countriescities', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  console.log('Response:', response)
  console.log('Status:', response.status)
  console.log('Ok?', response.ok)

  return response.json()
}