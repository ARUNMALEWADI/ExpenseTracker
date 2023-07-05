import React, { useContext, useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm'
import { ExpenseFormContext } from './ExpenseFormContext'
import { useSelector ,useDispatch} from 'react-redux'
import { Expenseactions } from './Store/Expensereducer'
import classes from './ShowExpenses.module.css'
import Modal from './Modal'

const ShowExpenses =  () => {
    const authctx= useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const formctx=useContext(ExpenseFormContext)
  const [Data,setdata]=useState([])
  const [Edit,setEdit]=useState(false)
  const [editdata,seteditdata]=useState()
  const [Delete,Setdelete]=useState()

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
  Setdelete(!Delete)
  }
    


useEffect(()=>{
  async function a(){
    let res=await fetch(`https://expensetracker-4141b-default-rtdb.firebaseio.com/${authctx.email}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },})
     let response=await res.json()
     let c=[]
     let amount=0;
    for (const key in response) {
        c.push({id:key,id2:response[key].id,category:response[key].category,price:response[key].price,description:response[key].description ,date:response[key].date})
        amount+=Number(response[key].price);
    }

// console.log(c);
dispatch(Expenseactions.expenseadd(c))
dispatch(Expenseactions.expenseamount(amount))
setdata(c)
//Premium feature storing
if(amount>=10000)
{    let res=await fetch(`https://expensetracker-4141b-default-rtdb.firebaseio.com/${authctx.email+"premium"}.json`, {
  method: "PUT",
  body:JSON.stringify(true),
  headers: {
    "Content-Type": "application/json",
  },})
 let response=await res.json()  

}
}
a()},[formctx.ShowForm,Edit,Delete])

const EditHandler=(item)=>{
  seteditdata(item)
  setEdit(true)
 

}
const closeEditHandler=()=>{
  setEdit(false)
}


  return <div>
  
   {/* <ul>
    {Data.map((item)=><li><div>{item.category}</div><div>{item.description}</div><div>{item.price}Rs.</div> <div>{item.date}</div> <button onClick={EditHandler.bind(null,item)}>Edit</button><button  onClick={DeleteHandler.bind(null,item.id)}>Delete</button></li>)}
   </ul> */}
<div className={classes.div}>
   <table>
    <thead>
      <tr><th>Description</th><th>Amount</th><th>Category</th><th>Date</th><th>Edit/Delete</th></tr>
    </thead>
    <tbody>
  { Data.map((item)=>  <tr className={classes.tr}>
       <td>{item.description}</td>
       <td>{item.price}</td>
       <td>{item.category}</td>
       <td>{item.date}</td>
       <td><button onClick={EditHandler.bind(null,item)} className={classes.edit}>Edit</button><button onClick={DeleteHandler.bind(null,item.id)} className={classes.del}>Delete</button></td>
       </tr>)}
      </tbody>
   </table>
</div>
   {Edit &&<Modal close={closeEditHandler}>
   
 <ExpenseForm item={editdata} closeEdit={closeEditHandler} isediting={Edit}></ExpenseForm>
 </Modal>
 }
  </div>
}

export default ShowExpenses