import React from 'react';
import './filter.css';

function Checkbox(props) {

    const handleBoxClick = (e) => {
        e.stopPropagation();

        // Call filter method, pass in selected candidate and current overlay index
        props.handleCheckboxChange(lastName.toLowerCase(), props.filterInd)
    }

    const lastName = props.name[1]
    const fullName = props.name[0] + " " + lastName

    const isDisabled = (candidate) => {
        if (candidate.toLowerCase() !== props.filterName && (props.filter.indexOf(candidate.toLowerCase()) > -1)) return true
    }

    return ( 
        <label className={"input-container " + (isDisabled(lastName) ? 'disabled ' : '') + (props.active ? 'active-checked ' : '')}>
            {fullName}
                <input 
                    type="checkbox"
                    className={'box-' + lastName.toLowerCase()}
                    onChange={(handleBoxClick)} 
                    disabled={isDisabled(lastName)} 
                    checked={props.checked}>
                </input>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;