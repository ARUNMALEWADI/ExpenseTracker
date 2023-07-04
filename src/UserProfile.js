import React, {useRef, useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const [toggle,settoggle]=useState(false)
  const [name,setname]=useState('')
  const[purl,seturl]=useState('');
    const profname=useRef();
    const ppurl=useRef();
const token=useSelector(state=>state.auth.token)


const GetprofileHandler=async()=>{
const res= await fetch(
  "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAV9y6epL8g9M5iqxQu2vM5tDZHxol-1k0",
  {
    method: "POST",
    body: JSON.stringify({
      idToken:token,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }
);
const response=await res.json()
console.log(response);
try{
alert(response.error.message)
}
catch{
  const user=response.users[0]
  setname(user.displayName);
  seturl(user.photoUrl);

}
}
GetprofileHandler();

    const SubmitHandler= async(e)=>{
     e.preventDefault()
     const res= await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAV9y6epL8g9M5iqxQu2vM5tDZHxol-1k0",{method:"POST", body:JSON.stringify({ idToken:token,displayName:profname.current.value,photoUrl:ppurl.current.value,returnSecureToken:true}), headers:{"Content-Type":"application/json"}})
      const response=await res.json()
     try{
  alert(response.error.message)
   }
   catch{
   alert("Userprofile updated sucessfully")
   settoggle(!toggle)
   }
  }

    const toggleHandler=()=>{
      settoggle(!toggle)
    }
  return <div>
    <h1>Contact Details</h1>
          <form onSubmit={SubmitHandler} >
            <label style={{position:"relative",marginRight:"0.5cm"}}>Profile Name</label>
            <input type='text' ref={profname} defaultValue={name}></input>
            <label style={{position:"relative",marginRight:"0.5cm",marginLeft:"1cm"}}>Profile Photo URL</label>
            <input type='url' ref={ppurl} defaultValue={purl}></input>
            <button type='submit' style={{position:"relative",marginRight:"5cm",color:"orangered"}}>Update</button>
            <button type='button' onClick={toggleHandler}>Cancel</button>
          </form>
          {toggle&&<Redirect to="/Home"></Redirect>}
  </div>
}

export default UserProfile