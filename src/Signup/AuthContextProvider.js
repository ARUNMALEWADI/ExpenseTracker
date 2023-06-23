import React, { useReducer, useState } from 'react'

export const AuthContext=React.createContext({token:"",Login:false,login:(token)=>{},logout:()=>{}});
const defaultstate={}
function reducer(state,action)
{

}
const AuthContextProvider = (props) => {
  const [currentstate,dispatch]=useReducer(reducer,defaultstate)
  const [token,settoken]=useState('')
  const userloggedin=!!token
  const loginHandler=(token)=>{
     settoken(token)
  }
  const logoutHandler=()=>{
 settoken('')
  }
const authdata={ token:token,
  IsLoggedin:userloggedin,
  login:loginHandler,
  logout:logoutHandler
}

  return <AuthContext.Provider value={authdata}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContextProvider