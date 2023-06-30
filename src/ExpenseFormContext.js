import React, { useState } from 'react'
import {createContext} from 'react'
import ExpenseForm from './ExpenseForm'
export const ExpenseFormContext=createContext({ShowForm:false,OpenFormHandler:()=>{},CloseFormHandler:()=>{}})
const ExpenseFormContextProvider = (props) => {
    const [ShowForm,SetForm]=useState(false)
    const openFormHandler=()=>{
       
        SetForm(true)
     
    }
    const CloseFormHandler=()=>{
        console.log('hi');
        SetForm(false)
    }

    const Formhandler={
        ShowForm:ShowForm,
        OpenFormHandler:openFormHandler,
        CloseFormHandler:CloseFormHandler
    }
  return <ExpenseFormContext.Provider value={Formhandler}>
       {props.children}
  </ExpenseFormContext.Provider>
}

export default ExpenseFormContextProvider