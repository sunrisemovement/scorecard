import React from 'react';
import './filter.css';

function Checkbox(props) {

    const handleBoxClick = (e) => {
        e.stopPropagation();

        console.log(props.name[1].toLowerCase())
    }

    const fullName = props.name[0] + " " + props.name[1]

    const isChecked = (candidate) => {
        return (props.filter.indexOf(candidate.toLowerCase()) > -1);
    }

    const isDisabled = (candidate) => {
        if (candidate.toLowerCase() !== props.filterName && (props.filter.indexOf(candidate.toLowerCase()) > -1)) return true
    }

    return ( 
        <label className={"input-container " + (isDisabled(props.name[1]) ? 'disabled' : '')}>{fullName}
                <input type="checkbox" onChange={(handleBoxClick)} disabled={isDisabled(props.name[1])} defaultChecked={isChecked(props.name[1])}></input>
                <span className="checkmark"></span>
            </label>
    );
}

export default Checkbox;