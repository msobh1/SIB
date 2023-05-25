import React from "react";

export const PayModal =(props)=>{
    const{openPayModal,setOpenPayModal}=props;
    return(
        <div className="pay-main-container">
            <div className="pay-title">
                {props.data}
            </div>
            {props.data==="PAY BILLS" && <div className="pay-modal-inputs">
                <label for select-option>pay to</label>
                <select className="select-option" >
                    <option>please choose</option>
                    <option>gas</option>
                    <option>electricity</option>
                    <option>water</option>
                    <option>Telephone bills</option>
                </select>
                <label for AMOUNT>AMOUNT</label>
                <input className="AMOUNT" type="number" placeholder="AMOUNT"/>
                <label for AMOUNT>describtion</label>
                <input className="describtion" type="text" placeholder="PAYMENT DESCRIBTION"/>
                <div className="pay-modal-buttons">
                <button className="pay-modal-btn-pay" onClick={() => setOpenPayModal(!openPayModal)}>Pay</button>
                <button className="pay-modal-btn-cancel" onClick={() => setOpenPayModal(!openPayModal)}>Cancel</button>
                </div>
                </div>}
            {props.data==="DONATIONS" &&<div className="pay-modal-inputs">
                <label for pay-to>PAY TO</label>
                <input className="pay-to" type="TEXT" placeholder="ACCOUNT NO."/>
                <label for AMOUNT>AMOUNT</label>
                <input className="AMOUNT" type="number" placeholder="AMOUNT"/>
                <label for AMOUNT>describtion</label>
                <input className="describtion" type="text" placeholder="PAYMENT DESCRIBTION"/>
                <div className="pay-modal-buttons">
                <button className="pay-modal-btn-pay" onClick={() => setOpenPayModal(!openPayModal)}>Pay</button>
                <button className="pay-modal-btn-cancel" onClick={() => setOpenPayModal(!openPayModal)}>Cancel</button>
                </div>
            </div> }
           
        </div>
    );
}