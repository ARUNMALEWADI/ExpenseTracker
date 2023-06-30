import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'

import ExpenseForm from './ExpenseForm'
import ShowExpenses from './ShowExpenses'
import { ExpenseFormContext } from './ExpenseFormContext'
import { useSelector } from 'react-redux'
const Home = () => {
   const authctx= useSelector(state=>state.auth)
   const formctx=useContext(ExpenseFormContext)
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
  console.log("hell");
 
  const ShowformHandler=()=>{
    formctx.OpenFormHandler();
   
  }

  return <div>
      <button><Link to="/Userprofile">Complete Profile</Link></button>
      <button onClick={EmailverificationHandler}>Verify Email</button>
      <button onClick={ShowformHandler}>AddExpenses</button>
    { formctx.ShowForm&& <ExpenseForm></ExpenseForm>}
      <ShowExpenses></ShowExpenses>
      
  </div>
}

export default Home