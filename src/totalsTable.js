import React from 'react';
import './totalsTable.css';

function TotalsTable(props) {

    return (
        <div className="totals-table" id="table-8">
            <h2 id='title' className="table-title">Totals</h2> <span className="table-points">(out of 200)</span>
            <table>
                <tbody>
                <tr id="header">
                    <th></th>
                    <th>Biden</th>
                    <th>Warren</th>
                    <th>Sanders</th>
                </tr>
                <tr className="">
                    <td>How they talk about it <span className="row-points">(Out of 35)</span></td>
                    <td id="biden">12</td>
                    <td id="warren">20</td>
                    <td id="sanders">30</td>
                </tr>
                <tr className="">
                    <td>How much they talk about it <span className="row-points">(Out of 30)</span></td>
                    <td id="biden">5</td>
                    <td id="warren">15</td>
                    <td id="sanders">25</td>
                </tr>
                <tr className="">
                    <td>Plan to win <span className="row-points">(Out of 35)</span></td>
                    <td id="biden">12</td>
                    <td id="warren">25</td>
                    <td id="sanders">30</td>
                </tr>
                <tr className="">
                    <td>Green New Deal vision <span className="row-points">(Out of 100)</span></td>
                    <td id="biden">50</td>
                    <td id="warren">75</td>
                    <td id="sanders">90</td>
                </tr>
                <tr id="totals-row">
                    <td>Total <span className="row-points">(out of 200)</span></td>
                    <td id="biden">150</td>
                    <td id="warren">175</td>
                    <td id="sanders">200</td>
                </tr>
                </tbody>
            </table>
        </div>
        );
}


export default TotalsTable;