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

    return ( 
        <div className="modal-candidate-info">
            <div className="modal-nav-container">
                <div className="sc-modal-nav">
                    <div id="1" data-name="biden" onClick={handleClick} className={"modal-nav-item " + (props.candidateName === "biden" ? 'nav-selected' : '')}>Biden {props.row.biden.score}</div>
                    <div id="2" data-name="warren" onClick={handleClick} className={"modal-nav-item " + (props.candidateName === "warren" ? 'nav-selected' : '')}>Warren {props.row.warren.score}</div>
                    <div id="3" data-name="sanders" onClick={handleClick} className={"modal-nav-item " + (props.candidateName === "sanders" ? 'nav-selected' : '')}>Sanders {props.row.sanders.score}</div>
                    <div className="sc-modal-close">
                        <span className="x-icon">&times;</span>
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