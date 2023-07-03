import React, { Fragment, useContext, useState } from 'react'
import classes from './Home.module.css'
import './Switch.css'
import {Link} from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import ShowExpenses from './ShowExpenses'
import { ExpenseFormContext } from './ExpenseFormContext'
import { useSelector ,useDispatch} from 'react-redux'
import { Authactions } from './Store/Authreducer'
import { ThemeAction } from './Store/Themereducer'
import Premium from './Premium'
import Csv from './Csv'
const Home = () => {
   const authctx= useSelector(state=>state.auth)
   const expensectx=useSelector(state=>state.expense.amount)
   const formctx=useContext(ExpenseFormContext)
   const dispatch=useDispatch()
const premium=useSelector(state=>state.theme.premium)



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
  const LogoutHandler=()=>{
 dispatch(Authactions.logoutHandler())
 alert("Logged out sucessfully")
  }


const ThemeHandler=()=>{
  dispatch(ThemeAction.TogglethemeHandler())
}

const label=".";

  return <Fragment>
     <div className={classes.div}>
     <Link to="/Userprofile"> <button className={classes.profile}>Complete Profile</button></Link>
      <button onClick={EmailverificationHandler}>Verify Email</button>
     <Link to="/Login" > <button onClick={LogoutHandler} style={{  height:'1cm',backgroundColor:"transparent", color: 'red',borderradius: '5px',bordercolor: 'red'}}>Logout</button></Link>
    
  { premium &&<div className={classes.switch}>
     <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input  type="checkbox" className="checkbox" 
               name="label" id={label} />
        <label onClick={ThemeHandler} className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div></div>}
    
      </div>

      <div className={classes.all}>
      <div >
      <p>Total Spendings</p>
      <img  className={classes.moneyimg} src={require("./assets/rupees.jpg")} alt={"Carlie Anglemire"}/>
       <label>{expensectx}Rs.</label>
      </div>
  
      <div >
      <img  className={classes.moneyimg} src={require("./assets/money.jpg")} alt={"Carlie Anglemire"}/>
      <p>Add New Expense</p>
      <button onClick={ShowformHandler}>
        <section style={{border:"1px solid red",borderRadius:"50px",color:"whitesmoke",backgroundColor:"red",marginLeft:'0.2cm',fontSize:"large"}}>+</section>
        <section  style={{color:"red",marginLeft:'0.2cm',fontSize:"large"}} >Expense</section>
        </button>
      </div>
      
      <div>
      <img  className={classes.moneyimg} src={require("./assets/premium.jpg")} alt={"Carlie Anglemire"}/>
      <p>Pro Membership</p>
     { premium&&<h>Activated</h>}
      {!premium&&<h>{10000-expensectx} needs to go</h>}
      </div>
       
      <div>
      <img  className={classes.moneyimg} src={require("./assets/csv.jpg")} alt={"Carlie Anglemire"}/>
      <p>Download Data</p>
      </div>

      </div>
     <Premium></Premium>
    

    { formctx.ShowForm&& <ExpenseForm></ExpenseForm>}
      <ShowExpenses></ShowExpenses>
      <Csv></Csv>
      

  </Fragment>
}

export default Home