import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from './Signup/AuthContextProvider';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const UserProfile = () => {
  const [toggle,settoggle]=useState(false)
    const profname=useRef();
    const ppurl=useRef();
const ctx=useContext(AuthContext)
    const SubmitHandler= async(e)=>{
     e.preventDefault()
     const userprofiledata={
        displayName:profname.current.value,
        photoUrl:ppurl.current.value,
        deleteAttribute: "DISPLAY_NAME",
        idToken:ctx.token,
        returnSecureToken:true
     }
     const res= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAV9y6epL8g9M5iqxQu2vM5tDZHxol-1k0',{method:"POST",body:JSON.stringify(userprofiledata),headers:{"Content-Type":"application/json"}})
const response=await res.json();
settoggle(!toggle)
    }
    const toggleHandler=()=>{
      settoggle(!toggle)
    }
  return <div>
    <h1>Contact Details</h1>
          <form onSubmit={SubmitHandler}>
            <label>Profile Name</label>
            <input type='text' ref={profname}></input>
            <label>Profile Photo URL</label>
            <input type='url' ref={ppurl}></input>
            <button type='submit'>Update</button>
            <button type='button' onClick={toggleHandler}>Cancel</button>
          </form>
          {toggle&&<Redirect to="/Home"></Redirect>}
  </div>
}

export default UserProfile