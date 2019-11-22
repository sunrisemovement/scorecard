import React from 'react';
import './table.css';
import icon from './assets/i.png';
import expand from './assets/expand.png';

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

    const handleRowClick = (e) => {
        e.preventDefault();
                
        // pass in row index and table index
        props.onClickIcon(e.target.parentElement.parentElement.id, props.id);
    }

    // If there's a category title, it is the GND Vision section
    const isGNDVisionTable = (props.table.categorytitle) ? true : false;

    // Check for 'How Much' table id so we can render it appropriately
    const isHowMuchTable = (props.id === 1) ? true : false;

    // Checks for subtitles so we can render subtitle and points correctly
    const subtitleIsPresent = (props.table.subtitle !== "")

    const renderTableData = () => {
    return props.table.rows.map((row, index) => {
        const {title, total, biden, warren, sanders } = row;
        return (
            <tr id={index} key={index}>
                <td className="row-title"><img onClick={handleIconClick} className="info-icon" alt="Information Icon" src={icon}></img>{title} <span className="row-points">(Out of {total})</span></td>
                <td onClick={handleClick} id="biden">{biden.score}</td>
                <td onClick={handleClick} id="warren">{warren.score}</td>
                <td onClick={handleClick} id="sanders">{sanders.score}</td>
                <td id="icon-cell"> &nbsp;<img id="expand-icon" className="expand-icon" onClick={handleRowClick} alt="Information Icon" src={expand}></img></td>
            </tr>
        )
    });
    }

    return (
        <div id={props.table.id} name={props.table.id}>

        { isGNDVisionTable
            ? <div><div id='title' className="table-title">{props.table.categorytitle}</div>
                    <span className="table-points"> (out of {props.table.categorypoints})</span></div>
            : <span></span>
          }

          { subtitleIsPresent
            ? 
            <div>
                <div className="table-description">{props.table.description}</div>
                <h4 className="table-subtitle">{props.table.subtitle}&nbsp;(out of {props.table.points})</h4>  
            </div>
            : 
            <div>
                <div id='title' className="table-title">{props.table.title}</div>
                <span className="table-points"> (out of {props.table.points})</span>
                <div className="table-description">{props.table.description}</div>
            </div>
            }

            <table className="sc-table">
                <tbody>
                    <tr id="header">
                        <th width="65%"></th>
                        <th>Biden</th>
                        <th>Warren</th>
                        <th>Sanders</th>
                    </tr>
                    {renderTableData()}
                    {isHowMuchTable
                    ? 
                    <span></span>
                    :
                    <tr className="subtotals">
                        <td width="65%" className="subtotal-title">Subtotal <span className="row-points">(out of {props.table.points})</span></td>
                        <td id="biden" >{props.table.subtotals.biden}</td>
                        <td id="warren" >{props.table.subtotals.warren}</td>
                        <td id="sanders" >{props.table.subtotals.sanders}</td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
        );
}


export default Table;