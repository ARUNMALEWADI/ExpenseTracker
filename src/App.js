
import './App.css';
import Login from './Signup/Login';
import {Route,Switch} from 'react-router-dom'
import SignUp from './Signup/SignUp';
import UserProfile from './UserProfile';
import  { AuthContext } from './Signup/AuthContextProvider';
import Home from './Home';
import { useContext } from 'react';
import ForgotPassword from './Signup/ForgotPassword';
import ExpenseFormContextProvider from './ExpenseFormContext';
import { useSelector } from 'react-redux';




function App() {
  const authctx=localStorage.getItem('token')
   const login=useSelector(state=>state.auth.Isloggedin) 
  return (
    <div className="App">
 
    <Switch>
<Route  path="/Login"> <Login></Login></Route>
<Route path="/Signup"><SignUp></SignUp></Route>
<Route path="/Forgotpassword"><ForgotPassword></ForgotPassword></Route>
{login && <Route path="/Userprofile"><UserProfile></UserProfile></Route>}
<ExpenseFormContextProvider>
{ login||authctx&&<Route path="/Home"><Home></Home></Route>}

</ExpenseFormContextProvider>
<Route path='*'><SignUp></SignUp></Route>

   </Switch>
  
    </div>
  );
}

export default App;
