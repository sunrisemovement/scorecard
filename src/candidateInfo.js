import React from 'react';
import './modal.css';
import './candidateInfo.css';

function CandidateInfo(props) {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return ( 
        <div className="modal-candidate-info">
            <div className="modal-nav-container">
                <div className="modal-nav">
                    <div id="1" onClick={handleClick} className="modal-nav-item">Biden {props.row.biden.score}</div>
                    <div id="2" onClick={handleClick} className="modal-nav-item">Warren {props.row.warren.score}</div>
                    <div id="3" onClick={handleClick} className="modal-nav-item">Sanders {props.row.sanders.score}</div>
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