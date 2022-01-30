export const API_CALL_REQUEST = 'API_CALL_REQUEST'
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'
export const API_CALL_FAILURE = 'API_CALL_FAILURE'

export const login = () => (email, password) => {

  return {
    type: API_CALL_REQUEST,
    payload: {
      method: 'post',
      url: 'https://ob-fc-headhunt.herokuapp.com/api/auth/login',
      data: {
        email: email,
        password: password
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE
    }
  }
}

export const httpRequest = (method, url, data, headers) => {

  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method: method,
        url: url,
        headers: headers,
        data: data
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE
    }
  }
}