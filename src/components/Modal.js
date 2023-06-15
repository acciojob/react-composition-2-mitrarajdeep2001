import React from "react";

export default function Modal({show, onClose}) {
    return(
        <div className="modal">
            {
                show && <div className="modal-overlay">
                <button className="modal-close" onClick={onClose}>Close</button>
                <p>This is the content of the modal.</p>
                </div>
            }
        </div>
    )
}