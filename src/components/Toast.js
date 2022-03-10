import React from "react";
import { useSelector } from "react-redux";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";

export default function Toast(){
    const state = useSelector((s)=> s.toast);
    
    return (
        <div
      className="w-100 py-2 text-center"
      style={{
        backgroundColor: state.bgColor,
        color: state.textColor,
        fontSize: Font.Normal,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <p>{state.message}</p>
      </div>
    </div>
    )
}