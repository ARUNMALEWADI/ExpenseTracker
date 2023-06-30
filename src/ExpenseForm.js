import React, { useContext,  useRef} from 'react'
import { AuthContext } from './Signup/AuthContextProvider'
import { ExpenseFormContext } from './ExpenseFormContext'
import { useSelector } from 'react-redux'

const ExpenseForm = (props) => {
    const authctx=useSelector(state=>state.auth)
   
    const formctx=useContext(ExpenseFormContext)
    const expenseref=useRef()
    const descref=useRef()
    const categoryref=useRef()
    const dateref=useRef()
    let price;
    let category;
    let description;
    let date;
    if(props.item)
    { 
     price=props.item.price;
     category=props.item.category;
     description=props.item.description;
     date=props.item.date

      
    }
  
    



    const SubmitHandler= async(e)=>{

        e.preventDefault();
        const data={price:expenseref.current.value,
          description:descref.current.value,
          category:categoryref.current.value,
          date:dateref.current.value,
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

     formctx.CloseFormHandler()
    }
  return <div>
    <form onSubmit={SubmitHandler}>
      <h1>{props.isediting?"Edit Expense":"AddExpense"}</h1>
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
        <label>Date</label>
        <input type='date' ref={dateref} defaultValue={date}></input>
        <button type='submit'>{props.isediting?"Edit Expense":"AddExpense"}</button>
    </form>
    
  </div>
}

export default ExpenseForm