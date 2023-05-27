import React from "react";
import "./accountMainstyles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSack } from "@fortawesome/free-solid-svg-icons";

function AccountMain(){
    return(
        <div className="account-main">
            <div className="accbalance">
                <i className="fa-solid fa-sack"></i>
                <hh>Account ID: <br/> <pp2>1234 5678 8911 4576</pp2> </hh>
                <br/>
                <hh>Balance:<br/> <pp2>$ 50000</pp2> </hh>
            </div>
            <div className="transfer">
            </div>
        </div>
    );
}
export default AccountMain;