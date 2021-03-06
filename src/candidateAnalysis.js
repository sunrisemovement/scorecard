import React from 'react';
import './candidateInfo.css';
import ReactMarkdown from 'react-markdown'

function CandidateAnalysis(props) {


    return ( 
        <div>
            <div className="candidate-score">
                <span className="candidate-name">{props.candidateName}</span>'s score: {props.candidateObject.score}/{props.row.total}
            </div>
            <div id="analysis-title">Analysis</div>
                <div className="analysis-text">
                  <ReactMarkdown source={props.candidateObject.analysis} escapeHtml={false} />
            </div>

            {props.candidateObject.source &&
            (<div>
                <div id="analyses-title">Source</div>
                    <div className="analysis-text">
                      <ReactMarkdown source={props.candidateObject.source} escapeHtml={false} />
                    </div>
                </div>)
            }
        </div>
    );
}

export default CandidateAnalysis;
