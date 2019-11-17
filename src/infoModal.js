import React from 'react';
import './modal.css';
import ModalDescription from './modalDescription.js';
import CandidateInfo from './candidateInfo.js';

function InfoModal(props) {
    var table = props.scorecardData.tables[props.table];
    var row = props.scorecardData.tables[props.table].rows[props.row];

    return ( 
        <div id="info-modal" className="modal">
            <div className="modal-box">
                <span className="close">&times;</span>
                <div className="modal-content">
                <ModalDescription table={table} row={row}/>
                <CandidateInfo table={table} row={row} candidate={props.candidate}/>
                </div>
            </div>
      </div>
    );
}

export default InfoModal;