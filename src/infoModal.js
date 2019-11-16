import React from 'react';
import './modal.css';


function InfoModal(props) {
    return ( 
        <div id="info-modal" className="modal">
            <div className="modal-box">
                <span className="close">&times;</span>
                <div className="modal-content">
                <div className="modal-description">Testing 123</div>
                <div className="modal-candidate-info">Testing </div>
                </div>
            </div>
      </div>
    );
}

export default InfoModal;