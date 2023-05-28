import React from "react";
import Navbar from "../components/Navbar";
import "./report.css"
function Report(){
    return(
        <div className="report">
            <Navbar/>
            <div className="reportissue">
                <div className="report-title">
                    Report a techincal issue
                </div>
                <div className="describe">
                    Describe your problem
                    <input type="text"className="issue" />
                    <button className="report-button">Report</button>
                </div>
            </div>
        </div>
    );
}
export default Report;