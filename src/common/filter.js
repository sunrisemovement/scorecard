import React from 'react';
import './filter.css';
import icon from '../assets/dropdown.png';
import Checkboxes from './checkboxes.js'


function Filter(props) {

    // Currently selected candidates
    const candidateA = props.filter[0];
    const candidateB = props.filter[1];
    const candidateC = props.filter[2];

    

    const handleClick = (e) => {
        e.preventDefault();
        var checkboxes = document.getElementsByClassName('checkboxes');
        var currentCheckboxes = e.currentTarget.querySelector('.checkboxes')

        var isHidden = (currentCheckboxes.style.display === 'none');
        checkboxes[0].style.display = "none";
        checkboxes[1].style.display = "none";
        checkboxes[2].style.display = "none";
        
        isHidden ? (currentCheckboxes.style.display = "block") : (currentCheckboxes.style.display = "none") 
   
    }

    return ( 
            <div className="filter">
                <div className="candidate-dropdown" onClick={handleClick}>
                    {candidateA} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                    <Checkboxes filter={props.filter} key={1} ind={0}/>
                 </div>
                <div className="candidate-dropdown" onClick={handleClick}>
                    {candidateB} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                    <Checkboxes filter={props.filter} key={2} ind={1}/>
                </div>
                <div className="candidate-dropdown" onClick={handleClick}>
                    {candidateC} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                    <Checkboxes filter={props.filter} key={3} ind={2}/>
                </div>
            </div>
    );
}

export default Filter;