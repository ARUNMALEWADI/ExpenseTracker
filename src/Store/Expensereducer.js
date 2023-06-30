import { createSlice } from "@reduxjs/toolkit";
const ExpenseSlice=createSlice({
name:"Expenses",
initialState:{
    expenses:[],
    amount:0
},
reducers:{
expenseadd(state,action)
{
    state.expenses=[...action.payload]

},
expenseamount(state,action)
{
    state.amount=action.payload
}
}

})

export default ExpenseSlice;
export const Expenseactions=ExpenseSlice.actions;