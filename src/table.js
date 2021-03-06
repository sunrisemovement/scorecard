import React from 'react';
import './table.css';
import icon from './assets/expand.svg';

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

    // Currently selected candidates
    const candidateA = props.filter[0];
    const candidateB = props.filter[1];
    const candidateC = props.filter[2];

    const renderTableData = () => {
    return props.table.rows.map((row, index) => {
        const {title, total } = row;
        return (
            <tr id={index} key={index} onClick={handleRowClick}>
                <td className="row-title"><img className="info-icon" alt="Information Icon" src={icon}></img>{title} <span className="row-points">(out of {total})</span></td>
                <td onClick={handleClick} id={candidateA}>{row[candidateA].score}</td>
                <td onClick={handleClick} id={candidateB}>{row[candidateB].score}</td>
                <td onClick={handleClick} id={candidateC}>{row[candidateC].score}</td>
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
                        <th></th>
                        <th>{candidateA}</th>
                        <th>{candidateB}</th>
                        <th>{candidateC}</th>
                    </tr>
                    
                    {renderTableData()}
                    
                    <tr className="subtotals">
                        <td width="55%" className="subtotal-title">Subtotal <span className="row-points">(out of {props.table.points})</span></td>
                        <td id={candidateA} >{props.table.subtotals[candidateA]}</td>
                        <td id={candidateB} >{props.table.subtotals[candidateB]}</td>
                        <td id={candidateC} >{props.table.subtotals[candidateC]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
}


export default Table;
