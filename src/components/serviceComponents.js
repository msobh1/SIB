import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./serviceComponentsSyles.css";

 
function ServiceComponents() {
    return(
        <div className="servicePage">
           <div className="servicesComponents">
           <div className="servicess">
                <i3 class="fa-regular fa-credit-card"></i3>
                <Link className="services-links" to='/creditCard'>Credit Card</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                    <Link className="options-links" to="/creditCard">apply for a new credit card</Link>
                    <Link className="options-links" to="/creditCard">View</Link>
                    <Link className="options-links" to="/creditCard">apply</Link>
                    <Link className="options-links" to="/creditCard">apply</Link>
                </div>
            </div>

            <div className="servicess">
                <i3 class="fa-solid fa-sack-dollar"></i3>
                <Link className="services-links" to="/loan">Loans</Link>
                <p>This panel enables users track loans and apply for new ones instantly</p>
                <div className="options">
                    <Link className="options-links" to="/loan">Apply for loan</Link>
                    <Link className="options-links" to="/creditCard">Track loan</Link>
                    <Link className="options-links" to="/creditCard">Pay loan</Link>
                </div>

            </div>
            
            <div className="servicess">
                <i3 class="fa-solid fa-certificate"></i3>
                <Link className="services-links" to="/certificate">Certificates</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                    <Link className="options-links" to="/certificate">Apply for Certificate</Link>
                </div>
            </div>
            
            <div className="servicess">
                <i3 class="fa-solid fa-money-bill"></i3>
                <Link className="services-links" to="/bills">Bills</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                    <button className="pay=button">Pay bill</button>
                </div>
            </div>
            <div className="servicess">
                <i3 class="fa-solid fa-bell"></i3>
                <Link className="services-links" to="/reminders">Reminders</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                    <Link className="options-links" to="/creditCard">Set a reminder</Link>
                </div>
            </div>
            <div className="servicess">
            <i3 class="fa-solid fa-hand-holding-dollar"></i3>
                <Link className="services-links" to="/reminders">Donating</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                    <Link className="options-links" to="/creditCard">Donate</Link>
                </div>
            </div>
           </div>
        </div>
    );
 }
 export default ServiceComponents;