
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
import { Redirect } from 'react-router-dom';


function App() {
  const authctx=localStorage.getItem('token')
   const login=useSelector(state=>state.auth.Isloggedin) 
   const theme="App-"+useSelector(state=>state.theme.theme)
  return (
    <div className={`${theme}`}>
      <div className='header'>
 <h1>Expense Tracker</h1>
 </div>

    <Switch>
<Route  path="/Login" > <Login></Login></Route>

<Route path="/Signup" ><SignUp></SignUp></Route>
<Route path="/Forgotpassword" ><ForgotPassword></ForgotPassword></Route>
{login||authctx && <Route path="/Userprofile" ><UserProfile></UserProfile></Route>}
<ExpenseFormContextProvider>
{ <Route path="/Home" ><Home></Home></Route>}
<Route path="/" exact><Redirect to="/Login" /></Route>
</ExpenseFormContextProvider>


   </Switch>
  
    </div>
  );
}

export default App;
