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
                    <div id="1" data-name={props.filter[0]} onClick={handleClick} className={"modal-nav-item " + (props.candidateName === props.filter[0] ? 'nav-selected' : '')}>{props.filter[0]} {props.row.biden.score}</div>
                    <div id="2" data-name={props.filter[1]} onClick={handleClick} className={"modal-nav-item " + (props.candidateName === props.filter[1] ? 'nav-selected' : '')}>{props.filter[1]} {props.row.warren.score}</div>
                    <div id="3" data-name={props.filter[2]} onClick={handleClick} className={"modal-nav-item " + (props.candidateName === props.filter[2] ? 'nav-selected' : '')}>{props.filter[2]} {props.row.sanders.score}</div>
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