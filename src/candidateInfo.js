import React from 'react';
import './candidateInfo.css';
import CandidateAnalysis from './candidateAnalysis';
import ModalSplash from './modalSplash.js';
import expand from './assets/expand.png';

function CandidateInfo(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.onClickModalNav(e);
    }

    // Currently selected candidates
    const candidateA = props.filter[0];
    const candidateB = props.filter[1];
    const candidateC = props.filter[2];

    return ( 
        <div className="modal-candidate-info">
            <div className="modal-nav-container">
                <div className="sc-modal-nav">
                    <div id="1" data-name={candidateA} onClick={handleClick} className={"modal-nav-item " + (props.candidateName === candidateA ? 'nav-selected' : '')}>{candidateA} {props.row[candidateA].score}</div>
                    <div id="2" data-name={candidateB} onClick={handleClick} className={"modal-nav-item " + (props.candidateName === candidateB ? 'nav-selected' : '')}>{candidateB} {props.row[candidateB].score}</div>
                    <div id="3" data-name={candidateC} onClick={handleClick} className={"modal-nav-item " + (props.candidateName === candidateC ? 'nav-selected' : '')}>{candidateC} {props.row[candidateC].score}</div>
                    <div className="sc-modal-close">
                        <span className="x-icon">&times;</span>
                    </div>
                    <div className="sc-modal-close-mobile">
                        <img className="back-icon" alt="Back button" src={expand}></img>
                    </div>
                </div>
            </div>
         <div className="analysis-container">
            {props.candidateName !== null ? (
                <CandidateAnalysis candidateName={props.candidateName}
                                candidateObject={props.candidateObject}
                                row={props.row}/>
                ) : ( <ModalSplash />)
            }  
            </div>
        </div>
    );
}

export default CandidateInfo;