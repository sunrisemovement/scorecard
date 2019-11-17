import React from 'react';
import './table.css';
import icon from './assets/i.png';

function Table(props) {

    const handleClick = (e) => {
        e.preventDefault();
        
        // pass in row index, table index, and candidate to update state
        props.onClickCell(e.target.parentElement.id, props.id, e.target.id,);
    }

    const handleIconClick = (e) => {
        e.preventDefault();
        
        // pass in row index and table index
        props.onClickIcon(e.target.parentElement.parentElement.id, props.id);
    }

    const isGNDVisionTable = () => {
        if(props.table.categorytitle !== undefined && props.table.categorytitle === "Green New Deal vision") {
            return true
        }
        else return false;
    }

    const renderTableData = () => {
    return props.table.rows.map((row, index) => {
        const {title, biden, warren, sanders } = row //destructuring
        return (
            <tr id={index} key={index}>
                <td className="row-title"><img onClick={handleIconClick} className="info-icon" alt="Information Icon" src={icon}></img> {title}</td>
                <td onClick={handleClick} id="biden">{biden.score}</td>
                <td onClick={handleClick} id="warren">{warren.score}</td>
                <td onClick={handleClick} id="sanders">{sanders.score}</td>
            </tr>
        )
    });
    }

    return (
        <div id={props.table.id} name={props.table.id}>

        { isGNDVisionTable()
            ? <div><h2 id='title' className="table-title">{props.table.categorytitle}  </h2><span className="table-points">(out of {props.table.categorypoints})</span></div>
            : <span></span>
          }

            <h2 id='title' className="table-title">{props.table.title}</h2><h4 className="table-subtitle">{props.table.subtitle}</h4> <span className="table-points">(out of {props.table.points})</span>
            <div className="table-description">{props.table.description}</div>
            <table>
                <tbody>
                    <tr id="header">
                        <th></th>
                        <th>Biden</th>
                        <th>Warren</th>
                        <th>Sanders</th>
                    </tr>
                    {renderTableData()}
                    <tr className="subtotals">
                        <td className="subtotal-title">Subtotal <span className="row-points">(out of {props.table.points})</span></td>
                        <td id="biden" >{props.table.subtotals.biden}</td>
                        <td id="warren" >{props.table.subtotals.warren}</td>
                        <td id="sanders" >{props.table.subtotals.sanders}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
}


export default Table;