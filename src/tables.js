import React from 'react';
import Table from './table.js';
import TotalsTable from './totalsTable.js'
import './tables.css';

function Tables (props) {
  
  var tables = props.scorecardData.tables.slice(0,3);
  var gndTables = props.scorecardData.tables.slice(3)

return (
    <div className="tables-container">
      {
        tables.map(function (table, i) {
            return <Table 
            table = {table}
            key = {i}
            id = {i}
            onClickCell={props.onClickCell}
            onClickIcon={props.onClickIcon}
            />
        })
      }

      <div id="gnd-section">
        {
          gndTables.map(function (table, i) {
              return <Table 
              table = {table}
              key = {i + 3}
              id = {i + 3}
              onClickCell={props.onClickCell}
              onClickIcon={props.onClickIcon}
              />
          })
        }
      </div>

      <TotalsTable scorecardData={props.scorecardData}/>

    </div>
)
    }

export default Tables;