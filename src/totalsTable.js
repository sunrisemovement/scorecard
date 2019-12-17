import React from 'react';
import './totalsTable.css';


function TotalsTable(props) {

     // Currently selected candidates
     const candidateA = props.filter[0];
     const candidateB = props.filter[1];
     const candidateC = props.filter[2];

    const calculateTotals = (candidate) => {
        var candidateTotals = []

        props.tables.forEach( function (table, i) {
            candidateTotals.push(table.subtotals[candidate])
        })

        return candidateTotals
    }

    const gndTotal = (totals) => {
        let total = parseInt(totals[3]) + 
                    parseInt(totals[4]) + 
                    parseInt(totals[5]) + 
                    parseInt(totals[6]) +
                    parseInt(totals[7])

        return total.toString();
    }

    const subtotal = (totals) => {
        let subtotal = totals.reduce((total, num) => (parseInt(total) + parseInt(num)));

        return subtotal.toString();
    }

    var canA = calculateTotals(candidateA)
    var canB = calculateTotals(candidateB)
    var canC = calculateTotals(candidateC)

    return (
        <div className="totals-table" id="table-9">
            <div id='title' className="table-title">Totals</div> <span className="table-points">(out of 200)</span>
            <table className="sc-table">
                <tbody>
                <tr id="header">
                    <th></th>
                    <th>{candidateA}</th>
                    <th>{candidateB}</th>
                    <th>{candidateC}</th>
                </tr>
                <tr className="">
                    <td>How they talk about it <span className="row-points">(out of 35)</span></td>
                    <td id={candidateA}>{canA[0]}</td>
                    <td id={candidateB}>{canB[0]}</td>
                    <td id={candidateC}>{canC[0]}</td>
                </tr>
                <tr className="">
                    <td>How much they talk about it <span className="row-points">(out of 30)</span></td>
                    <td id={candidateA}>{canA[1]}</td>
                    <td id={candidateB}>{canB[1]}</td>
                    <td id={candidateC}>{canC[1]}</td>
                </tr>
                <tr className="">
                    <td>Plan to win <span className="row-points">(out of 35)</span></td>
                    <td id={candidateA}>{canA[2]}</td>
                    <td id={candidateB}>{canB[2]}</td>
                    <td id={candidateC}>{canC[2]}</td>
                </tr>
                <tr className="">
                    <td>Green New Deal vision <span className="row-points">(out of 100)</span></td>
                    <td id={candidateA}>{gndTotal(canA)}</td>
                    <td id={candidateB}>{gndTotal(canB)}</td>
                    <td id={candidateC}>{gndTotal(canC)}</td>
                </tr>
                <tr id="totals-row">
                    <td width="65%">Total <span className="total-points">(out of 200)</span></td>
                    <td id={candidateA}>{subtotal(canA)}</td>
                    <td id={candidateB}>{subtotal(canB)}</td>
                    <td id={candidateC}>{subtotal(canC)}</td>
                </tr>
                </tbody>
            </table>
        </div>
        );
}


export default TotalsTable;