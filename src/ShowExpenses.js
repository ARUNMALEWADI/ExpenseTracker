import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Signup/AuthContextProvider'
import ExpenseForm from './ExpenseForm'


const ShowExpenses =  () => {
    const authctx= useContext(AuthContext)
  const [Data,setdata]=useState([])
  const [Edit,setEdit]=useState(false)
  const [editdata,seteditdata]=useState()
 

useEffect(()=>{
  async function a(){
    let res=await fetch(`https://expensetracker-4141b-default-rtdb.firebaseio.com/${authctx.email}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },})
     let response=await res.json()
    //  console.log('response',response);
    //  let b=Object.values(response)
     let c=[]
    for (const key in response) {
        c.push({id:key,category:response[key].category,price:response[key].price,description:response[key].description})
    }
// console.log(c);
   setdata(c)
}
a()},[])

const EditHandler=(item)=>{
  seteditdata(item)
  setEdit(true)
 

}
const closeEditHandler=()=>{
  setEdit(false)
}
const DeleteHandler =async(id)=>{
  try{
  const res=await fetch(`https://expensetracker-4141b-default-rtdb.firebaseio.com/${authctx.email}/${id}.json`,
  {method:"DELETE",
  headers:{"Content-Type":"application/json"}
})
 
  const response=await res.json()
  console.log(response);
  alert("Expense deleted successfully")
}
catch(error){
  alert(error.message)
}
}
  

  return <div>
    <h1>hi</h1>
   <ul>
    {Data.map((item)=><li><div>{item.category}</div><div>{item.description}</div><div>{item.price}Rs.</div><button onClick={EditHandler.bind(null,item)}>Edit</button><button  onClick={DeleteHandler.bind(null,item.id)}>Delete</button></li>)}
   </ul>
   {Edit &&<ExpenseForm item={editdata} closeEdit={closeEditHandler} isediting={Edit}></ExpenseForm>}
  </div>
}

export default ShowExpenses