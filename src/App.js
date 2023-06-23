
import './App.css';
import Login from './Signup/Login';
import {Route,Switch} from 'react-router-dom'
import SignUp from './Signup/SignUp';
import UserProfile from './UserProfile';
import  { AuthContext } from './Signup/AuthContextProvider';
import Home from './Home';
import { useContext } from 'react';

function App() {
   const authctx=useContext(AuthContext)
   console.log(authctx.token);
  return (
    <div className="App">
 
    <Switch>
<Route  path="/Login"> <Login></Login></Route>
<Route path="/Signup"><SignUp></SignUp></Route>
{authctx.IsLoggedin && <Route path="/Userprofile"><UserProfile></UserProfile></Route>}
{authctx.IsLoggedin && <Route path="/Home"><Home></Home></Route>}
   </Switch>
  
    </div>
  );
}

export default App;
