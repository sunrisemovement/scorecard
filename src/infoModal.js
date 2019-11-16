import React from 'react';
import './modal.css';


function InfoModal(props) {
    return ( 
        <div id="info-modal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>
      </div>
    );
}

export default InfoModal;