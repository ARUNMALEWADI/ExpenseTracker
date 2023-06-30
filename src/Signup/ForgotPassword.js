import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const ForgotPassword = () => {
    const history=useHistory();
    const emailref=useRef()
    
    const passwordHandler=async(e)=>{
        e.preventDefault();
const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAV9y6epL8g9M5iqxQu2vM5tDZHxol-1k0',{method:"POST",body:JSON.stringify({requestType:"PASSWORD_RESET",email:emailref.current.value})})
   const response=await res.json()
try{
 alert(response.error.message)
}catch{
alert("Verification mail sent sucessfully")
history.replace("/Login")
}

}

  return( <form onSubmit={passwordHandler} >
    <label>Enter The Regestered Email</label>
    <input type='email' ref={emailref}></input>
    <button type='submit' >Send Link</button>
  </form>

  )
}

export default ForgotPassword