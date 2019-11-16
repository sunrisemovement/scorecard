import React from 'react';
import './totalsTable.css';
// import icon from './assets/i.png';

function TotalsTable(props) {


    // const renderTableData = () => {
    // return props.table.rows.map((row, index) => {
    //     const { id, title, biden, warren, sanders } = row //destructuring
    //     return (
    //         <tr id={id} key={id}>
    //             <td className="row-title"><img className="info-icon" alt="Information Icon" src={icon}></img> {title}</td>
    //             <td onClick={handleClick} id="biden">{biden}</td>
    //             <td onClick={handleClick} id="warren">{warren}</td>
    //             <td onClick={handleClick} id="sanders">{sanders}</td>
    //         </tr>
    //     )
    // });
    // }

    return (
        <div id="totals-table">
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
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="">
                    <td>How much they talk about it <span className="row-points">(Out of 30)</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="">
                    <td>Plan to win <span className="row-points">(Out of 35)</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="">
                    <td>Green New Deal vision <span className="row-points">(Out of 100)</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="totals-row">
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
        );
}


export default TotalsTable;