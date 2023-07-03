import { createSlice } from "@reduxjs/toolkit";
const ThemeSlice=createSlice({
    name:"theme",
    initialState:{
        premium:"",
        theme:'light'
    },
    reducers:{
        TogglethemeHandler(state)
        {
            state.theme=state.theme=="light"?"dark":"light"
        },
        PremiumHandler(state,action)
        {  state.premium=action.payload

        }

    }
})
export default ThemeSlice;
export const ThemeAction=ThemeSlice.actions;
