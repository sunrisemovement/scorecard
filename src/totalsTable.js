import React from 'react';
import './totalsTable.css';


function TotalsTable(props) {

    return (
        <div className="totals-table" id="table-9">
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
                    <td id="biden">18</td>
                    <td id="warren">32</td>
                    <td id="sanders">32</td>
                </tr>
                <tr className="">
                    <td>How much they talk about it <span className="row-points">(Out of 30)</span></td>
                    <td id="biden">8</td>
                    <td id="warren">15</td>
                    <td id="sanders">23</td>
                </tr>
                <tr className="">
                    <td>Plan to win <span className="row-points">(Out of 35)</span></td>
                    <td id="biden">7</td>
                    <td id="warren">33</td>
                    <td id="sanders">33</td>
                </tr>
                <tr className="">
                    <td>Green New Deal vision <span className="row-points">(Out of 100)</span></td>
                    <td id="biden">30</td>
                    <td id="warren">74</td>
                    <td id="sanders">96</td>
                </tr>
                <tr id="totals-row">
                    <td width="65%">Total <span className="row-points total-points">(out of 200)</span></td>
                    <td id="biden">63</td>
                    <td id="warren">154</td>
                    <td id="sanders">184</td>
                </tr>
                </tbody>
            </table>
        </div>
        );
}


export default TotalsTable;