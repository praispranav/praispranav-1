import React from "react";
import { Routes, Route} from "react-router-dom";
import HomePage from "./Home";

export default function AppNavigator(){
    return(
        <Routes>
            <Route exact path="/" element={<HomePage />}  />
        </Routes>
    )
}