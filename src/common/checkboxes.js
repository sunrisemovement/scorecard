import React from 'react';
import './filter.css';
import Checkbox from './checkbox.js';

function Checkboxes(props) {

    // Our data doesn't currently reference the candidates
    // by their full names. We can use this constant to generate
    // necessary checkbox filters for now.
    const candidateNames = [['Joe', 'Biden'],
                            ['Cory', 'Booker'],
                            ['Pete', 'Buttigieg'],
                            ['Bernie', 'Sanders'],
                            ['Tom', 'Steyer'],
                            ['Elizabeth', 'Warren'],
                            ['Andrew', 'Yang']]

    const filterName = props.filter[props.ind]
    var newSelection = "";

    const handleCheckboxChange = (cand) => {
        if (cand) newSelection = cand;
        else newSelection = '';
    }

    const handleDone = () => {
        var currentCheckboxes = document.getElementsByClassName('checkboxes')[props.ind];
        var oldCandidateBoxes = document.getElementsByClassName('box-' + filterName);
        var newCandidateBoxes = document.getElementsByClassName('box-' + newSelection);
        currentCheckboxes.style.display = "none";    
        
        if (newSelection && newSelection !== filterName) {
            // If a new candidate was selected, uncheck old candidate in all overlays,
            // check new candidate in all overlays

            oldCandidateBoxes[0].checked = false;
            oldCandidateBoxes[1].checked = false;
            oldCandidateBoxes[2].checked = false;

            newCandidateBoxes[0].checked = true;
            newCandidateBoxes[1].checked = true;
            newCandidateBoxes[2].checked = true;

            // If there's a valid new selection, update state
            props.handleFilterChange(newSelection, props.filterName, props.ind)

        } 
        else 
        {
            // If not, reselect the original candidate and restore 'active' class
            oldCandidateBoxes[props.ind].checked = true;
            oldCandidateBoxes[props.ind].parentElement.classList.add("active-checked");
        }

        // Reset this variable for next time
        newSelection = "";
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