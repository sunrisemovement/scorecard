import React from 'react';
import './filter.css';

function Checkboxes(props) {

    // Currently selected candidates
    // const candidateA = props.filter[0];
    // const candidateB = props.filter[1];
    // const candidateC = props.filter[2];

    const handleBoxClick = (e) => {
        e.preventDefault();
        let isChecked = e.currentTarget.checked;
        console.log(e.currentTarget)

        if (!isChecked) {e.currentTarget.checked = true}
    }

    const isChecked = (candidate) => {
        return (props.filter.indexOf(candidate) > -1);
    }

    return ( 
        <div className="checkboxes" id={'checkboxes-'+props.ind}>
            <label class="container">Joe Biden
                <input type="checkbox" onClick={handleBoxClick} checked={isChecked('biden')}></input>
                <span class="checkmark"></span>
            </label>
            <label class="container">Cory Booker
                <input type="checkbox" onClick={handleBoxClick} checked={isChecked('booker')}></input>
                <span class="checkmark"></span>
            </label>
            <label class="container">Pete Buttigieg
                <input type="checkbox" onClick={handleBoxClick} checked={isChecked('buttigieg')}></input>
                <span class="checkmark"></span>
            </label>
            <label class="container">Bernie Sanders
                <input type="checkbox" onClick={handleBoxClick} checked={isChecked('sanders')}></input>
                <span class="checkmark"></span>
            </label>
            <label class="container">Elizabeth Warren
                <input type="checkbox" onClick={handleBoxClick} checked={isChecked('warren')}></input>
                <span class="checkmark"></span>
            </label>
            <label class="container">Andrew Yang
                <input type="checkbox" onClick={handleBoxClick} checked={isChecked('yang')}></input>
                <span class="checkmark"></span>
            </label>
         </div>
    );
}

export default Checkboxes;