import React from 'react';
import './totalsTable.css';


function TotalsTable(props) {

    return (
        <div className="totals-table" id="table-9">
            <h2 id='title' className="table-title">Totals</h2> <span className="table-points">(out of 200)</span>
            <table className="sc-table">
                <tbody>
                <tr id="header">
                    <th></th>
                    <th>Biden</th>
                    <th>Warren</th>
                    <th>Sanders</th>
                </tr>
                <tr className="">
                    <td>How they talk about it <span className="row-points">(Out of 35)</span></td>
                    <td id="biden">25</td>
                    <td id="warren">25</td>
                    <td id="sanders">25</td>
                </tr>
                <tr className="">
                    <td>How much they talk about it <span className="row-points">(Out of 30)</span></td>
                    <td id="biden">20</td>
                    <td id="warren">20</td>
                    <td id="sanders">20</td>
                </tr>
                <tr className="">
                    <td>Plan to win <span className="row-points">(Out of 35)</span></td>
                    <td id="biden">30</td>
                    <td id="warren">30</td>
                    <td id="sanders">30</td>
                </tr>
                <tr className="">
                    <td>Green New Deal vision <span className="row-points">(Out of 100)</span></td>
                    <td id="biden">80</td>
                    <td id="warren">80</td>
                    <td id="sanders">80</td>
                </tr>
                <tr id="totals-row">
                    <td width="65%">Total <span className="row-points total-points">(out of 200)</span></td>
                    <td id="biden">100</td>
                    <td id="warren">150</td>
                    <td id="sanders">170</td>
                </tr>
                </tbody>
            </table>
        </div>
        );
}


export default TotalsTable;