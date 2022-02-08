
import './App.css';
import "@fontsource/raleway";
import "@fontsource/material-icons-outlined";
import "@fontsource/material-icons";
import Login from './pages/login/login';
import Students from './pages/students/students';
import Notfoundpage from './pages/404/NotFoundPage';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, { useState } from 'react';


function App() {  

  const initialUser = {
    loggedIn: false,
    user: null,
    token: ''      
  }

  const [userState, setUserState] = useState(initialUser);

  const updateUser = (newState) => {
    setUserState(newState)
  }

  const initialStudents = {
    studentList: [],
    totalStudents: 0,
    studentsPerPage: 12,
    totalPages: 1,
    page: 1,
    selectedStudent: null
  }

  const [studentsState, setStudentsState] = useState(initialStudents);

  const updateStudents = (newState) => {
    setStudentsState(newState)
  }  
  
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {
            userState.loggedIn ? 
            (<Redirect from='/' to='/students'/>)
            :
            (<Redirect from='/' to='/login'/>)
          }
        </Route>
        <Route exact path='/login'>
          {
            userState.loggedIn ? 
            (<Redirect from='/login' to='/students'/>)
            :
            (<Login userState={userState} updateUser={updateUser}/>)
          }        
        </Route>
        <Route exact path='/students'>
          {
            userState.loggedIn ? 
            (<Students 
              userState={userState} 
              updateUser={updateUser}
              studentsState={studentsState}
              updateStudents={updateStudents}
               />)
            :
            (<Redirect from='/students' to='/login'/>)
          }
        </Route>
        <Route component={ Notfoundpage }/>
      </Switch>
    </Router>
  )
}


export default App;
