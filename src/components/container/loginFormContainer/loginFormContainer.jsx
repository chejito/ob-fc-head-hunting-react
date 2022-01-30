import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../pure/loginForm/loginForm';
import { httpRequest } from '../../../store/actions/asyncActions'

const mapStateToProps = (state) => {
  return {
    logged: state.userState.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      console.log(email, password) 
      const data = {
        email: email,
        password: password
      }

      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      }

      const url = 'https://ob-fc-headhunt.herokuapp.com/api/auth/login'

      dispatch(httpRequest('post', url, data, headers))
    }
  }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer
