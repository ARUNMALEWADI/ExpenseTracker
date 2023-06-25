
import './App.css';
import Login from './Signup/Login';
import {Route,Switch} from 'react-router-dom'
import SignUp from './Signup/SignUp';
import UserProfile from './UserProfile';
import  { AuthContext } from './Signup/AuthContextProvider';
import Home from './Home';
import { useContext } from 'react';
import ForgotPassword from './Signup/ForgotPassword';

function App() {
   const authctx=useContext(AuthContext)
   const login=localStorage.getItem('token')
  return (
    <div className="App">
 
    <Switch>
<Route  path="/Login"> <Login></Login></Route>
<Route path="/Signup"><SignUp></SignUp></Route>
<Route path="/Forgotpassword"><ForgotPassword></ForgotPassword></Route>
{authctx.IsLoggedin && <Route path="/Userprofile"><UserProfile></UserProfile></Route>}
{login && <Route path="/Home"><Home></Home></Route>}

   </Switch>
  
    </div>
  );
}

export default App;
