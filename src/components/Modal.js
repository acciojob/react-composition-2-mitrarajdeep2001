import React from "react";

export default function Modal({show, onClose}) {
    return(
        <div className="model-overlay">
            {
                show && <div>
                <button className="model-close" onClick={onClose}>Close</button>
                <p>This is the content of the modal.</p>
                </div>
            }
        </div>
    )
}