import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import "./Navbarstyles.css";
import React, { Component } from "react";
class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="NavbarLogo">SIB</h1>
                <ul className="nav-menu">
                    
                    {menuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                            </li>
                        )

                    })}
                    
                </ul>

            </nav>
        )
    }
} 
export default Navbar;
