import React from 'react';
import './table.css';
import icon from './assets/i.png';

function Table(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.onClickCell(e.target.parentElement.id, e.target.id);
    }

    const isGNDVisionTable = () => {
        if(props.table.categorytitle !== undefined && props.table.categorytitle === "Green New Deal vision") {
            return true
        }
        else return false;
    }

    const renderTableData = () => {
    return props.table.rows.map((row, index) => {
        const { id, title, biden, warren, sanders } = row //destructuring
        return (
            <tr id={id} key={id}>
                <td className="row-title"><img className="info-icon" alt="Information Icon" src={icon}></img> {title}</td>
                <td onClick={handleClick} id="biden">{biden}</td>
                <td onClick={handleClick} id="warren">{warren}</td>
                <td onClick={handleClick} id="sanders">{sanders}</td>
            </tr>
        )
    });
    }

    return (
        <div  id={props.table.id}>

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
                </tbody>
            </table>
        </div>
        );
}


export default Table;