import "./Navbarstyles.css";
import React, { Component } from "react";
class navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <div className="navbar__logo">
                   
                </div>
                <div className="navbar__menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        )
    }
} 
export default navbar;
