import React from 'react';
import ReactMarkdown from 'react-markdown'
import './modal.css';

function ModalDescription(props) {

    const isGndTable = (props.table.subtitle);

    return ( 
        <div className="modal-description">
            <span className="modal-table-title">
                {isGndTable && <React.Fragment>Green New Deal: <br></br> </React.Fragment>}
                {props.table.title}
                {props.table.subtitle}
            </span>
            <span className="modal-row-title">
                    {props.row.title}
            </span>
            <span className="modal-row-description">
              <ReactMarkdown
                source={props.row.description}
                escapeHtml={false}
              />
            </span>
        </div>
    );
}

export default ModalDescription;
