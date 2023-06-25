import React, { useContext,  useRef, useState } from 'react'
import { AuthContext } from './Signup/AuthContextProvider'


const ExpenseForm = (props) => {
    const authctx=useContext(AuthContext)
    const expenseref=useRef()
    const descref=useRef()
    const categoryref=useRef()
    let price;
    let category;
    let description;
    if(props.item)
    { 
     price=props.item.price;
     category=props.item.category;
     description=props.item.description;

      
    }
  
    



    const SubmitHandler= async(e)=>{
        e.preventDefault();
      
        const data={price:expenseref.current.value,
          description:descref.current.value,
          category:categoryref.current.value,
          id:Date.now()}

        if(props.isediting)
        {    try{
          const res=await fetch(`https://expensetracker-4141b-default-rtdb.firebaseio.com/${authctx.email}/${props.item.id}.json`,
        {method:"PUT",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"}
      })
       
        const response=await res.json()
        console.log(response);
        alert("Expense Edited sucessfully")
        props.closeEdit();
       
    }
     catch (error){
     alert(error.message)
     }
    


          
        }
else{

        try{
        // const email=authctx.email.replace('.','')
        console.log(authctx.email)
        const res=await fetch(`https://expensetracker-4141b-default-rtdb.firebaseio.com/${authctx.email}.json`,
        {method:"POST",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"}
      })
       
        const response=await res.json()
        console.log(res);
        alert("Expense added sucsessfully")
    }
     catch (error){
     alert(error.message)
     }}
    }
  return <div>
    <form onSubmit={SubmitHandler}>
        <label>Expense Price</label>
        <input type='number' id='price' ref={expenseref} defaultValue={price} ></input>
        <label>Description</label>
        <input type='text' id='description' ref={descref}   defaultValue={description}></input>
        <label>Expense Category </label>
        <select ref={categoryref} defaultValue={category}>
           <option>Food</option> 
           <option>Petrol</option> 
           <option>Entertainment</option>
           <option>Travel</option> 
        </select>
        <button type='submit'>Add Expense</button>
    </form>
    
  </div>
}

export default ExpenseForm