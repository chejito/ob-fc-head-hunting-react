
import './App.css';
import "@fontsource/raleway";
import "@fontsource/material-icons-outlined";
import "@fontsource/material-icons";
import Login from './pages/login/login';
import Students from './pages/students/students';
import StudentProfile from './pages/studentProfile/studentProfile';
import AddStudent from './pages/addStudent/addStudent';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Students></Students> */}
      <StudentProfile></StudentProfile>
      {/* <AddStudent></AddStudent> */}
    </div>
  );
}

export default App;
