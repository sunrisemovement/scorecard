import React from 'react';
import './filter.css';

function Checkbox(props) {

    const handleBoxClick = (e) => {
        e.stopPropagation();
        var clickedName = props.name[1].toLowerCase();

        var currentDropdown = document.getElementById("ch-"+ props.filterInd);
        var previousSelection = currentDropdown.getElementsByClassName('active-checked')[0];

        // First uncheck whomever was previously selected
        if (previousSelection) {
            previousSelection.classList.remove("active-checked")
            previousSelection.querySelector('input').checked = false;
        }
        // Then toggle the class of whoever was clicked
        e.currentTarget.checked ? 
        e.currentTarget.parentElement.classList.add("active-checked") :
        e.currentTarget.parentElement.classList.remove("active-checked")

        // Only send a new name up if they are now checked
        // clickedName = e.currentTarget.checked ? props.name[1].toLowerCase() : '';

        props.handleCheckboxChange(clickedName);
    }

    const fullName = props.name[0] + " " + props.name[1]

    const isDefaultChecked = (candidate) => {
        return (props.filter.indexOf(candidate.toLowerCase()) > -1);
    }

    const isDisabled = (candidate) => {
        if (candidate.toLowerCase() !== props.filterName && (props.filter.indexOf(candidate.toLowerCase()) > -1)) return true
    }

    return ( 
        <label className={"input-container " + (isDisabled(props.name[1]) ? 'disabled ' : '') + ((!isDisabled(props.name[1]) && isDefaultChecked(props.name[1])) ? 'active-checked ' : '')}>
            {fullName}
                <input 
                    type="checkbox"
                    className={'box-' + props.name[1].toLowerCase()}
                    onChange={(handleBoxClick)} 
                    disabled={isDisabled(props.name[1])} 
                    defaultChecked={isDefaultChecked(props.name[1])}>
                </input>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;

// id={"check-" + (props.name[1].toLowerCase())}