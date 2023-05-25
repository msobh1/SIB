import React from "react";

export const PayModal =({openPayModal,setOpenPayModal},props)=>{
    return(
        <div className="pay-main-container">
            <div className="pay-modal-inputs">
                <label>NAME</label>
                <input type="text"  placeholder="Name" />
                <label>MOBILE NUMBER</label>
                <input type="text"  placeholder="MOBILE NUMBER" />
                <label>NATIONAL ID</label>
                <input type="text"  placeholder="NATIONAL ID" />
                <label>SALARY</label>
                <input type="number"  placeholder="SALARY" />
                <label>LOAN AMOUNT</label>
                <input type="number"  placeholder="LOAN AMOUNT" />
                <label>LOAN DURATION</label>
                <input type="number"  placeholder="LOAN DURATION" />
            </div>
            <div className="pay-modal-buttons">
            <button className="pay-modal-btn-apply" onClick={() => setOpenPayModal(!openPayModal)}>Apply</button>
            <button className="pay-modal-btn-cancel" onClick={() => setOpenPayModal(!openPayModal)}>Cancel</button>
            </div>
        </div>
    );
}