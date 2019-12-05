import React from 'react';
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

            {props.candidateObject.source &&
            (<div>
                <div id="analyses-title">Source</div>
                    <div className="analysis-text">
                        {props.candidateObject.source}
                    </div>
                </div>)    
            }
        </div>
    );
}

export default CandidateAnalysis;