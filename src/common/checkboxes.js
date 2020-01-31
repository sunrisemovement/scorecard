import React from 'react';
import './filter.css';
import Checkbox from './checkbox.js';
import expand from '../assets/expand.png';


function Checkboxes(props) {

    const currentCandidates = []

    const populateFullNames = (candidates) => {
        candidates.forEach((lastName) => {
            if (lastName === 'biden') {
                currentCandidates.push(['Joe', 'Biden'])
            }
            else if (lastName === 'buttigieg') {
                currentCandidates.push(['Pete', 'Buttigieg'])
            }
            else if (lastName === 'booker') {
                currentCandidates.push(['Cory', 'Booker'])
            }
            else if (lastName === 'sanders') {
                currentCandidates.push(['Bernie', 'Sanders'])
            }
            else if (lastName === 'steyer') {
                currentCandidates.push(['Tom', 'Steyer'])
            }
            else if (lastName === 'warren') {
                currentCandidates.push(['Elizabeth', 'Warren'])
            }
            else if (lastName === 'yang') {
                currentCandidates.push(['Andrew', 'Yang'])
            }
        })
    }

    // Populate candidates' full names sorted alphabetically to populate checkboxes
    populateFullNames(props.candidates.sort());

    const filterName = props.filter[props.ind]

    const onClickDone = () => {

        // Hide checkboxes overlay
        var currentCheckboxes = document.getElementsByClassName('checkboxes')[props.ind];
        currentCheckboxes.style.display = "none";    

        // Call method in parent component
        props.handleDone(props.ind);
    }

    return ( 
        <div className="checkboxes" style={ {display: 'none'}} id={'ch-'+props.ind} onClick={(e) => e.stopPropagation()}>
        <div>
            {
                currentCandidates.map(function (name, i) {
                    return <Checkbox 
                                name = {name}
                                filter = {props.filter}
                                filterName = {filterName}
                                filterInd = {props.ind}
                                checked = {props.checked.indexOf(name[1].toLowerCase()) > -1}
                                active = {(props.active === name[1].toLowerCase())}
                                key = {i}
                                id = {i} 
                                handleCheckboxChange = {props.handleCheckboxChange} />
                })
            }
        </div>

            <button className='done-button' onClick={onClickDone}>Done</button>
            
            <div className="filter-modal-close-mobile">
                <img className="filter-back-icon" alt="Back button" src={expand}></img>
            </div>
            <div className="filter-modal-description">
                Choose a candidate to compare: 
            </div>
            
         </div>
    );
}

export default Checkboxes;