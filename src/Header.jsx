import React from "react";
import logo from "./Images/LoGo.jpg";
import "./index.css";
const Header = () => {
    return(
        <>
            <div className="header">
            <img src={logo} alt="logo"/>
            <h1>MyImpings !</h1>
            </div>
        </>
    ); 
};

export default Header;
