import React from 'react';
import Header from './common/header.js';
import Tables from './tables.js';

const ScorecardApp = (props) => (
        <div className="scorecard-container">
            <Header onClickNav={props.onClickNav} />
            <Tables onClickCell={props.onClickCell} 
                    scorecardData={props.scorecardData}
                    onClickIcon={props.onClickIcon}
                    />
        </div>
    );


export default ScorecardApp;