import axios from "axios"

export const uploadToCloud = (formData, token, fileType) => {
    

    return axios.post(`https://ob-fc-headhunt.herokuapp.com/api/fileupload/${fileType}`, formData, {
    // return axios.post(`http://localhost:8080/api/fileupload/${fileType}`,formData, {
      headers: { 
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        'Authorization': `Bearer ${token}` 
      }
    })
}
