import React from 'react';
import Table from './table.js';
import TotalsTable from './totalsTable.js'
import './tables.css';

const Tables = (props) => (
    <div className="tables-container">
      {
        props.scorecardData.tables.map(function (table, i) {
          return <Table 
          table = {table}
          key = {i}
          id = {i}
          onClickCell={props.onClickCell}
          />
        })
      }
      <TotalsTable scorecardData={props.scorecardData}/>
    </div>
);

export default Tables;