import { createSlice } from "@reduxjs/toolkit";
import { Colors } from "../config/Colors";

const initialState = {
    textColor: Colors.Tertiary,
    bgColor: "black",
    visible: false,
    message: 'Error'
}

const ToastSlice = createSlice({
    name:"toast",
    initialState,
    reducers:{
        add:(state, action)=>{

        }
    }
})


export const { add } = ToastSlice.actions;
export const ToastReducer = ToastSlice.reducer