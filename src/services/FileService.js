import axios from "axios"

export const uploadToCloud = (formData, token, fileType) => {

    

    // return axios.post(`https://ob-fc-headhunt.herokuapp.com/api/fileupload/${fileType}`, body)
    return axios.post(`http://localhost:8080/api/fileupload/${fileType}`,formData, {
      headers: { 
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        'Authorization': `Bearer ${token}` 
      }
    })
}

// export const uploadToCloud = async (file, token, fileType) => {

//   let body = {
//     file: file
//   }
  
//   // let response = await fetch(`https://ob-fc-headhunt.herokuapp.com/api/fileupload/${fileType}`, {
//     let response = await fetch(`http://localhost:8080/api/fileupload/${fileType}`, {
//     method: 'POST',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-type': 'multipart/form-data',
//       'Authorization': `Bearer ${token}`
//     },
//     cache: 'no-cache',
//     body: JSON.stringify(body)
//   })

//   return response.json()
// }