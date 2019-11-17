import React from 'react';
import './modal.css';

function CandidateInfo(props) {

    return ( 
        <div className="modal-candidate-info">
        {props.candidate}
         </div>
    );
}

export default CandidateInfo;