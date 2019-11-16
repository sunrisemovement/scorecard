import React from 'react';
import './totalsTable.css';

function TotalsTable(props) {


    // const calculateTotals = () => {
    //  var bidenScores = props.scorecardData.details[0].scores;
    //  var sum = 0;
    //  console.log(bidenScores)
    // //  for(var i = 0; i < tds.length; i ++) {
    // //          sum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
    // //          console.log(sum)
    //  }

    //  calculateTotals();

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
                    <td id="biden">150</td>
                    <td id="warren">175</td>
                    <td id="sanders">200</td>
                </tr>
                <tr className="">
                    <td>How much they talk about it <span className="row-points">(Out of 30)</span></td>
                    <td id="biden">150</td>
                    <td id="warren">175</td>
                    <td id="sanders">200</td>
                </tr>
                <tr className="">
                    <td>Plan to win <span className="row-points">(Out of 35)</span></td>
                    <td id="biden">150</td>
                    <td id="warren">175</td>
                    <td id="sanders">200</td>
                </tr>
                <tr className="">
                    <td>Green New Deal vision <span className="row-points">(Out of 100)</span></td>
                    <td id="biden">150</td>
                    <td id="warren">175</td>
                    <td id="sanders">200</td>
                </tr>
                <tr id="totals-row">
                    <td>Total</td>
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