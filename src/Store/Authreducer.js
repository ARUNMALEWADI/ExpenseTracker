import {createSlice} from '@reduxjs/toolkit'
const AuthSlice=createSlice({
    name:"Authentication",
    initialState:{token:localStorage.getItem('token'),email:localStorage.getItem('email'),Isloggedin:false},
    reducers:{
         loginHandler(state,action){

          return { token:action.payload.token,
            email:action.payload.email,
            Isloggedin:true
          }
         },
          logoutHandler(state){
            state.token=''
            state.email=null
            state.Isloggedin=false
            localStorage.removeItem('token')
            localStorage.removeItem('email')
             }
    }
})
export const Authactions=AuthSlice.actions
export default AuthSlice;