import React from 'react';
import './nav.css';
import icon from '../assets/dropdown.png';


function Filter(props) {

    // Currently selected candidates
    const candidateA = props.filter[0];
    const candidateB = props.filter[1];
    const candidateC = props.filter[2];

    // const handleClick = (e) => {
    //     e.preventDefault();
   
    // }

    return ( 
            <div className="filter">
                <div className="candidate-dropdown">
                    {candidateA} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                </div>
                <div className="candidate-dropdown">
                    {candidateB} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                </div>
                <div className="candidate-dropdown">
                    {candidateC} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                </div>
            </div>
    );
}

export default Filter;