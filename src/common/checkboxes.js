import React from 'react';
import './filter.css';

function Checkboxes(props) {

    // Currently selected candidates
    // const candidateA = props.filter[0];
    // const candidateB = props.filter[1];
    // const candidateC = props.filter[2];

    const handleBoxClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        let isChecked = e.currentTarget.checked;
        console.log(e.currentTarget)

        if (!isChecked) {e.currentTarget.checked = true}
    }

    const isChecked = (candidate) => {
        return (props.filter.indexOf(candidate) > -1);
    }

    return ( 
        <div className="checkboxes" style={ {display: 'none'}} id={'ch-'+props.ind} onClick={(e) => e.stopPropagation()}>
            <label className="input-container">Joe Biden
                <input type="checkbox" onChange={handleBoxClick} defaultChecked={isChecked('biden')}></input>
                <span className="checkmark"></span>
            </label>
            <label className="input-container">Cory Booker
                <input type="checkbox" onChange={handleBoxClick} defaultChecked={isChecked('booker')}></input>
                <span className="checkmark"></span>
            </label>
            <label className="input-container">Pete Buttigieg
                <input type="checkbox" onChange={handleBoxClick} defaultChecked={isChecked('buttigieg')}></input>
                <span className="checkmark"></span>
            </label>
            <label className="input-container">Bernie Sanders
                <input type="checkbox" onChange={handleBoxClick} defaultChecked={isChecked('sanders')}></input>
                <span className="checkmark"></span>
            </label>
            <label className="input-container">Elizabeth Warren
                <input type="checkbox" onChange={handleBoxClick} defaultChecked={isChecked('warren')}></input>
                <span className="checkmark"></span>
            </label>
            <label className="input-container">Andrew Yang
                <input type="checkbox" onChange={handleBoxClick} defaultChecked={isChecked('yang')}></input>
                <span className="checkmark"></span>
            </label>
         </div>
    );
}

export default Checkboxes;