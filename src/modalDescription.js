import React from 'react';
import './modal.css';

function ModalDescription(props) {
    // var table = props.scorecardData.tables[props.table];
    // var row = props.scorecardData.tables[props.table].rows[props.row];

    return ( 
        <div className="modal-description">
            <span className="modal-table-title">
                Green New Deal: <br></br>
                {props.table.title}
                {props.table.subtitle}
            </span>
            <span className="modal-row-title">
                {props.row.title}
            </span>
            <span className="modal-row-description">
                {props.row.description}
            </span>
        </div>
    );
}

export default ModalDescription;