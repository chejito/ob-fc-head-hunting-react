
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


function App() { 

  let loggedIn = false

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {
            loggedIn ? 
            (<Redirect from='/' to='/students'/>)
            :
            (<Redirect from='/' to='/login'/>)
          }
        </Route>
        <Route exact path='/login' component={ Login }/>
        <Route exact path='/students' component={ Students }/>
        <Route exact path='/studentprofile' component={ StudentProfile }/>
        <Route exact path='/addstudent' component={ AddStudent }/>
        <Route component={ Notfoundpage }/>
      </Switch>
    </Router>
  )
}


export default App;
