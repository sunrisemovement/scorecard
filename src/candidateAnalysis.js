import React from 'react';
// import './modal.css';
import './candidateInfo.css';

function CandidateAnalysis(props) {


    return ( 
        <div>
            <div className="candidate-score">
                <span className="candidate-name">{props.candidateName}</span>'s score: {props.candidateObject.score}/{props.row.total}
            </div>
            <div id="analysis-title">Analysis</div>
                <div className="analysis-text">
                    {props.candidateObject.analysis}
            </div>
        </div>
    );
}

export default CandidateAnalysis;