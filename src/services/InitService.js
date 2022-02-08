export const getCountriesTags = async (token) => {
  
  let response = await fetch('https://ob-fc-headhunt.herokuapp.com/api/countriestags', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  
  return response.json()
}