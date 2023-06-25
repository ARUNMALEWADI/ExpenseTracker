import React, { useContext, useRef } from 'react'

import { Link ,useHistory} from 'react-router-dom'
import { AuthContext } from './AuthContextProvider';
const Login = () => {
   const authctx=useContext(AuthContext)
   const history=useHistory()
    const emailref=useRef();
    const passwordref=useRef();

   const LoginHandler=async (e)=>{
    e.preventDefault();
 const authdata={
    email:emailref.current.value,
    password:passwordref.current.value,
    returnSecureToken:true
 }
const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAV9y6epL8g9M5iqxQu2vM5tDZHxol-1k0',{method:"POST",
body:JSON.stringify(authdata),headers:{"Content-Type":"application/json"}})
const response=await res.json();
try
{
   alert(response.error.message)
}
catch{
 alert("Logged In sucessfully");
 localStorage.setItem("token",response.idToken);
 localStorage.setItem("email",emailref.current.value.replace('.',''));
 authctx.login(localStorage.getItem('token'),localStorage.getItem('email'));

 history.replace("/Home")

 
}
   }
  
  return <div>
          <h1>Login</h1>
         <form onSubmit={LoginHandler}>
         <label>Email:</label>
        <input type='email' ref={emailref}></input>
        <label>Password</label>
        <input type='password' ref={passwordref}></input>
        <button type='submit' >Login</button>
        </form>

       <p><Link to="/Forgotpassword">Forgot Password</Link></p>
        <p>Don't have account?<Link to="/Signup">Sign up</Link></p>
  </div>
}

export default Login