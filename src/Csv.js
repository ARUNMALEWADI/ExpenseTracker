import React from 'react'
import { useSelector } from 'react-redux';


const Csv = () => {
    const expense=useSelector(state=>state.expense.expenses)
    console.log("expense",expense);
//   function makeCSV(rows){
//     return rows.map((r)=>{r.join(",")}).join("\n");
//   }
//   const blob=new Blob([makeCSV(expense)])
    
  return (
    <div>
        {/* <a id="a" download="Expense.csv" href={URL.createObjectURL(blob)}></a> */}
      
    </div>
  )
}

export default Csv