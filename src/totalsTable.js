import React from 'react';
import './totalsTable.css';


function TotalsTable(props) {

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

    var biden = calculateTotals("biden")
    var warren = calculateTotals("warren")
    var sanders = calculateTotals("sanders")

    return (
        <div className="totals-table" id="table-9">
            <div id='title' className="table-title">Totals</div> <span className="table-points">(out of 200)</span>
            <table className="sc-table">
                <tbody>
                <tr id="header">
                    <th></th>
                    <th>Biden</th>
                    <th>Warren</th>
                    <th>Sanders</th>
                </tr>
                <tr className="">
                    <td>How they talk about it <span className="row-points">(out of 35)</span></td>
                    <td id="biden">{biden[0]}</td>
                    <td id="warren">{warren[0]}</td>
                    <td id="sanders">{sanders[0]}</td>
                </tr>
                <tr className="">
                    <td>How much they talk about it <span className="row-points">(out of 30)</span></td>
                    <td id="biden">{biden[1]}</td>
                    <td id="warren">{warren[1]}</td>
                    <td id="sanders">{sanders[1]}</td>
                </tr>
                <tr className="">
                    <td>Plan to win <span className="row-points">(out of 35)</span></td>
                    <td id="biden">{biden[2]}</td>
                    <td id="warren">{warren[2]}</td>
                    <td id="sanders">{sanders[2]}</td>
                </tr>
                <tr className="">
                    <td>Green New Deal vision <span className="row-points">(out of 100)</span></td>
                    <td id="biden">{gndTotal(biden)}</td>
                    <td id="warren">{gndTotal(warren)}</td>
                    <td id="sanders">{gndTotal(sanders)}</td>
                </tr>
                <tr id="totals-row">
                    <td width="65%">Total <span className="total-points">(out of 200)</span></td>
                    <td id="biden">{subtotal(biden)}</td>
                    <td id="warren">{subtotal(warren)}</td>
                    <td id="sanders">{subtotal(sanders)}</td>
                </tr>
                </tbody>
            </table>
        </div>
        );
}


export default TotalsTable;