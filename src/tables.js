import React from 'react';
import Table from './table.js';
import TotalsTable from './totalsTable.js'
import './tables.css';

function Tables (props) {
  
  // We need to render the GND tables in their own section
  // for the scrollSpy to work properly
  var tables = props.scorecardData.tables.slice(0,3);
  var gndTables = props.scorecardData.tables.slice(3);

return (
    <div className="tables-container">
      {
        tables.map(function (table, i) {
            return <Table 
            table = {table}
            key = {i}
            id = {i}
            onClickCell={props.onClickCell}
            onClickRow={props.onClickRow}
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
              onClickRow={props.onClickRow}
              />
          })
        }
      </div>

      <TotalsTable tables={props.scorecardData.tables}/>

    </div>
)
    }

export default Tables;