import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const HomeSlice = createSlice({
    name:"home",
    initialState,
    reducers:{
        add:(state, action)=>{

        }
    }
})


export const { add } = HomeSlice.actions;
export const HomeReducer = HomeSlice.reducer