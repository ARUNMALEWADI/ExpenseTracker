import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from './Signup/AuthContextProvider'
import ExpenseForm from './ExpenseForm'
import ShowExpenses from './ShowExpenses'
const Home = () => {
   const authctx= useContext(AuthContext)
  const EmailverificationHandler=async (e)=>{
    e.preventDefault();
    const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAV9y6epL8g9M5iqxQu2vM5tDZHxol-1k0',{method:"POST",body:JSON.stringify({requestType:"VERIFY_EMAIL",idToken:authctx.token})})
 const response=await res.json()
 try{
alert(response.error.message)
 }
 catch{
 alert("Verifcation Mail sent sucessfully")
 }
  }
  return <div>
      <button><Link to="/Userprofile">Complete Profile</Link></button>
      <button onClick={EmailverificationHandler}>Verify Email</button>
      <ExpenseForm></ExpenseForm>
      <ShowExpenses></ShowExpenses>
      
  </div>
}

export default Home