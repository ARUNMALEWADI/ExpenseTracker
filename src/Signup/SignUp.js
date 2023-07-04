import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Authactions } from '../Store/Authreducer';
import { useDispatch } from 'react-redux';
import classes from './SignUp.module.css'

const SignUp = () => {
    const history=useHistory()
  
    const dispatch=useDispatch();
const emailref=useRef();
const passwordref=useRef();
const confirmpasswordref=useRef();

const Signuphandler= async(e)=>{
    e.preventDefault();
    if(passwordref.current.value!==confirmpasswordref.current.value)
    {  alert(" passwords are not matching!")
    
}else{
   const authdata={
    email:emailref.current.value,
    password:passwordref.current.value,
    returnSecureToken:true
 }
const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAV9y6epL8g9M5iqxQu2vM5tDZHxol-1k0',{method:"POST",
body:JSON.stringify(authdata),headers:{"Content-Type":"application/json"}})
const response=await res.json();

try
{
    alert(response.error.message)
}
catch{
    alert("Signed up sucessfully")
    localStorage.setItem('token',response.idToken)
    localStorage.setItem('email',emailref.current.value.replace('.',''))
    dispatch(Authactions.loginHandler({token:response.idToken,email:emailref.current.value.replace('.','')}))
    
    history.replace("/Home")
}
   }
    }
    
    return <div className={classes.div}>
        <h1>SignUp</h1>
        {<form onSubmit={Signuphandler}> 
            <label>Email:</label>
            <input type='email' ref={emailref} ></input>
            <label>Password</label>
            <input type='password' ref={passwordref} ></input>
            <label>Confirm Password</label>
            <input type='password' ref={confirmpasswordref} ></input>
            <button type='submit'>Signup</button>
        </form>}

        {<p >Have an account?<Link to="/Login">Login</Link></p>}
    </div>

}

export default SignUp