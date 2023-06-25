import React, { useContext,useRef} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from './AuthContextProvider';

const SignUp = () => {
    const history=useHistory()
    const authctx=useContext(AuthContext)
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
    authctx.login(response.idToken,emailref.current.value.replace('.',''))
    history.replace("/Home")
}
   }
    }
    
    return <div>
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

        {<button >Have an account?<Link to="/Login">Login</Link></button>}
    </div>

}

export default SignUp