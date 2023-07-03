import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeAction } from './Store/Themereducer'

const Premium = () => {
    const authctx=useSelector(state=>state.auth)
    const premium=useSelector(state=>state.theme.Premium)
    const [remium,setremium]=useState()
const dispatch=useDispatch()

//     useContext(()=>{async function b(){
//         let res=await fetch(`https://expensetracker-4141b-default-rtdb.firebaseio.com/${authctx.email+"premium"}.json`, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },})
//  let response=await res.json()  
//  console.log('hel');
//  setremium(response)

//    dispatch(ThemeAction.PremiumHandler(response))

//     } b()},[premium,remium])



async function b(){
    let res=await fetch(`https://expensetracker-4141b-default-rtdb.firebaseio.com/${authctx.email+"premium"}.json`, {
method: "GET",
headers: {
"Content-Type": "application/json",
},})
let response=await res.json()  

setremium(response)

dispatch(ThemeAction.PremiumHandler(response))

}
 b()
  return <div></div>
}

export default Premium