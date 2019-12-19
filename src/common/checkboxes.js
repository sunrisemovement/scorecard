import React from 'react';
import './filter.css';
import Checkbox from './checkbox.js';

function Checkboxes(props) {

    // Our data doesn't currently reference the candidates
    // by their full names. We can use this constant to generate
    // necessary checkbox filters for now.
    const candidateNames = [ ['Joe', 'Biden'],
                            ['Cory', 'Booker'],
                            ['Pete', 'Buttigieg'],
                            ['Bernie', 'Sanders'],
                            ['Elizabeth', 'Warren'],
                            ['Andrew', 'Yang'] ]

    const filterName = props.filter[props.ind]
    var newSelection;

    const handleCheckboxChange = (cand) => {
        newSelection = cand;
    }

    const handleDone = () => {
        var checkboxes = document.getElementsByClassName('checkboxes')[props.ind];
        checkboxes.style.display = "none";
        
        props.handleFilterChange(newSelection, props.ind)
    }

    return ( 
        <div className="checkboxes" style={ {display: 'none'}} id={'ch-'+props.ind} onClick={(e) => e.stopPropagation()}>
            {
                candidateNames.map(function (name, i) {
                    return <Checkbox 
                                name = {name}
                                filter = {props.filter}
                                filterName = {filterName}
                                filterInd = {props.ind}
                                key = {i}
                                id = {i} 
                                handleCheckboxChange = {handleCheckboxChange} />
                })
            }

            <button className='done-button' onClick={handleDone}>Done</button>
            
         </div>
    );
}

export default Checkboxes;