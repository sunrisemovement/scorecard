import React from 'react';
import './table.css';
import icon from './assets/i.png';
import expand from './assets/expand.png';

function Table(props) {

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // pass in row index, table index, and candidate to update state
        props.onClickCell(e.currentTarget.parentElement.id, props.id, e.target.id,);
    }

    const handleRowClick = (e) => {
        e.preventDefault();
        
        // pass in row index and table index
        props.onClickRow(e.currentTarget.id, props.id);
    }

    const handleChevronClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
                
        // pass in row index and table index
        props.onClickRow(e.target.parentElement.parentElement.id, props.id);
    }

    // If there's a category title, it is the GND Vision section
    const isGNDVisionTable = (props.table.categorytitle) ? true : false;

    // Checks for subtitles so we can render subtitle and points correctly
    const subtitleIsPresent = (props.table.subtitle !== "")

    const renderTableData = () => {
    return props.table.rows.map((row, index) => {
        const {title, total, biden, warren, sanders } = row;
        return (
            <tr id={index} key={index} onClick={handleRowClick}>
                <td className="row-title"><img className="info-icon" alt="Information Icon" src={icon}></img>{title} <span className="row-points">(out of {total})</span></td>
                <td onClick={handleClick} id="biden">{biden.score}</td>
                <td onClick={handleClick} id="warren">{warren.score}</td>
                <td onClick={handleClick} id="sanders">{sanders.score}</td>
                <td id="icon-cell"><img id="expand-icon" className="expand-icon" onClick={handleChevronClick} alt="Information Icon" src={icon}></img></td>
            </tr>
        )
    });
    }

    return (
        <div id={props.table.id} name={props.table.id}>

        { isGNDVisionTable && 
            <div><div id='title' className="table-title">{props.table.categorytitle}</div>
                    <span className="table-points"> (out of {props.table.categorypoints})</span></div>
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
                    
                    <tr className="subtotals">
                        <td width="65%" className="subtotal-title">Subtotal <span className="row-points">(out of {props.table.points})</span></td>
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
