import React from "react";

export default function Modal({show, onClose}) {
    return(
        <div className="modal-overlay">
            {
                show && <div className="modal">
                <button className="modal-close" onClick={onClose}>Close</button>
                <p>This is the content of the modal.</p>
                </div>
            }
        </div>
    )
}