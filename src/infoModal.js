import React from 'react';
import './modal.css';
import ModalDescription from './modalDescription.js';
import CandidateInfo from './candidateInfo.js';

function InfoModal(props) {
    var table = props.scorecardData.tables[props.table];
    var row = props.scorecardData.tables[props.table].rows[props.row];

    return ( 
        <div id="info-modal" className="sc-modal">
            <div className="sc-modal-box">
                <div className="sc-modal-content">
                <ModalDescription table={table} 
                                  row={row}/>
                <CandidateInfo row={row} 
                               candidateName={props.candidate}
                               candidateObject={row[props.candidate]}
                               onClickModalNav={props.onClickModalNav}
                               filter={props.filter}/>
                </div>
            </div>
      </div>
    );
}

export default InfoModal;

// <span className="close">&times;</span>
