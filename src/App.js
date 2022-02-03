
import './App.css';
import "@fontsource/raleway";
import "@fontsource/material-icons-outlined";
import "@fontsource/material-icons";
import Login from './pages/login/login';
import Students from './pages/students/students';
import StudentProfile from './pages/studentProfile/studentProfile';
import Notfoundpage from './pages/404/NotFoundPage';
import AddStudent from './pages/addStudent/addStudent';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, { useState, createContext } from 'react';

export const StateContext = createContext(null)

function App() {
  

  const initialState = {
    loggedIn: false,
    user: null,
    token: ''      
  }

  const [userState, setUserState] = useState(initialState);

  const updateUser = (newState) => {
    setUserState(newState)
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
            (<Login updateUser={updateUser}/>)
          }        
        </Route>
        <Route exact path='/students'>
          {
            userState.loggedIn ? 
            (<Students updateUser={updateUser}/>)
            :
            (<Redirect from='/students' to='/login'/>)
          }
        </Route>
        
        {/* <Route exact path='/studentprofile' component={ StudentProfile }/>
        <Route exact path='/addstudent' component={ AddStudent }/> */}
        <Route component={ Notfoundpage }/>
      </Switch>
    </Router>
  )
}


export default App;
