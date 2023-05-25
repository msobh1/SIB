import React from "react";

export const Modal = ({ openModal, setOpenModal }) => {
    return (
        <div className="main-container">
            <div className="modal-inputs">
                <label>Amount</label>
                <input type="number"  placeholder="0.0" />
            </div>
            <button className="modal-btn-apply" onClick={() => setOpenModal(!openModal)}>Apply</button>
            <button className="modal-btn-cancel" onClick={() => setOpenModal(!openModal)}>Cancel</button>
        </div>
    );
}