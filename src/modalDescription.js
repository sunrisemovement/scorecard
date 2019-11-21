import React from 'react';
import './modal.css';

function ModalDescription(props) {
    var isHowMuchTable = props.row.title === "Subtotal";
    const howMuchDescription = "All candidates’ tweets over a period of three months are to be considered in the data. Each candidate will be ranked based on how high their score is. The candidate with the highest overall score will receive the full 30 points and each subsequent candidate will receive a weighted score based on how they compare to the highest and lowest ranking candidates. The candidate with the lowest overall score will receive zero points from this section. Keywords for Twitter advanced search include: “climate” “climate crisis” “climate change” “climate justice” “green new deal” “#greennewdeal” “global warming”. Twitter was chosen as the primary form of social media because all candidates have more Twitter followers than Facebook or Instagram followers. Our initial assessment will focus strictly on volume of tweets with room for more analysis."

    return ( 
        <div className="modal-description">
            <span className="modal-table-title">
                Green New Deal: <br></br>
                {props.table.title}
                {props.table.subtitle}
            </span>
            <span className="modal-row-title">
                {isHowMuchTable 
                    ? 'How much they talk about it' 
                    : props.row.title 
                }
            </span>
            <span className="modal-row-description">
                {isHowMuchTable 
                    ? howMuchDescription
                    : props.row.description
                }
            </span>
        </div>
    );
}

export default ModalDescription;