import React from 'react';
import './modal.css';
import './candidateInfo.css';

function CandidateInfo(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.onClickModalNav(e);
    }

    return ( 
        <div className="modal-candidate-info">
            <div className="modal-nav-container">
                <div className="modal-nav">
                    <div id="1" data-name="biden" onClick={handleClick} className={"modal-nav-item " + (props.candidateName === "biden" ? 'nav-selected' : '')}>Biden {props.row.biden.score}</div>
                    <div id="2" data-name="warren" onClick={handleClick} className={"modal-nav-item " + (props.candidateName === "warren" ? 'nav-selected' : '')}>Warren {props.row.warren.score}</div>
                    <div id="3" data-name="sanders" onClick={handleClick} className={"modal-nav-item " + (props.candidateName === "sanders" ? 'nav-selected' : '')}>Sanders {props.row.sanders.score}</div>
                    <span className="close">&times;</span>
                </div>
            </div>
        <div className="analysis-container">
          <div className="candidate-score">
            <span className="candidate-name">{props.candidateName}</span>'s score: {props.candidateObject.score}/{props.row.total}
          </div>
          <div id="analysis-title">Analysis</div>
            <div className="analysis-text">
                {props.candidateObject.analysis}
            </div>
        </div>
         </div>
    );
}

export default CandidateInfo;