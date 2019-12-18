import React from 'react';
import './filter.css';
import icon from '../assets/dropdown.png';
import Checkboxes from './checkboxes.js'


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
                    <Checkboxes filter={props.filter} key={1} ind={0}/>
                 </div>
                <div className="candidate-dropdown">
                    {candidateB} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                    <Checkboxes filter={props.filter} key={2} ind={1}/>
                </div>
                <div className="candidate-dropdown">
                    {candidateC} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                    <Checkboxes filter={props.filter} key={3} ind={2}/>
                </div>
            </div>
    );
}

export default Filter;