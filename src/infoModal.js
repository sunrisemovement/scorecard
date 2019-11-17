import React from 'react';
import './modal.css';
import ModalDescription from './modalDescription.js';
import CandidateInfo from './candidateInfo.js';

function InfoModal(props) {
    var table = props.scorecardData.tables[props.table];
    var row = props.scorecardData.tables[props.table].rows[props.row];
    var selectedCandidate = props.candidate;

    const candidate = (selectedCandidate) => {

        if (selectedCandidate !== null) {
            let biden = row.biden;
            let warren = row.warren;
            let sanders = row.sanders;

            if (selectedCandidate === "biden") {
                return biden
            }
            if (selectedCandidate === "warren") {
                return warren
            }
            return sanders
        } else return {}

    }

    return ( 
        <div id="info-modal" className="modal">
            <div className="modal-box">
                <div className="modal-content">
                <ModalDescription table={table} row={row}/>
                <CandidateInfo table={table} 
                               row={row} 
                               candidateName={props.candidate}
                               candidateObject={candidate(selectedCandidate)}
                               scorecardData={props.scorecardData}
                               onClickModalNav={props.onClickModalNav}/>
                </div>
            </div>
      </div>
    );
}

export default InfoModal;

// <span className="close">&times;</span>
