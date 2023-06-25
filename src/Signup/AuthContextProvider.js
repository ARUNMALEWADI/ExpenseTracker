import React, { useReducer, useState } from 'react'

export const AuthContext=React.createContext({token:localStorage.getItem('token'),email:localStorage.getItem('email'),Login:false,login:(token)=>{},logout:()=>{}});
const defaultstate={}
function reducer(state,action)
{

}
const AuthContextProvider = (props) => {
  const [currentstate,dispatch]=useReducer(reducer,defaultstate)
  const [token,settoken]=useState('')
  const [Email,setemail]=useState(null)
  const userloggedin=!!token
  const loginHandler=(token,email)=>{
     settoken(token)
     setemail(email)
  }
  const logoutHandler=()=>{
 settoken('')
 setemail(null)
  }
const authdata={ token:localStorage.getItem('token'),
  IsLoggedin:userloggedin,
  email:localStorage.getItem('email'),
  login:loginHandler,
  logout:logoutHandler
}

  return <AuthContext.Provider value={authdata}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContextProvider