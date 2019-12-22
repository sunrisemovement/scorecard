import React from 'react';
import Header from './common/header.js';
import Tables from './tables.js';
import Nav from './common/nav.js'


const ScorecardApp = (props) => (
        <div className="scorecard-container">
            <Header onClickNav={props.onClickNav} />
            <Nav 
                onClickNav={props.onClickNav}
                filter={props.filter}
                handleFilterChange={props.handleFilterChange}
                candidates = {Object.keys(props.scorecardData.tables[0].subtotals)} />
            <Tables 
                onClickCell={props.onClickCell} 
                scorecardData={props.scorecardData}
                onClickRow={props.onClickRow}
                filter={props.filter} />
        </div>
    );


export default ScorecardApp;