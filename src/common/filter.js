import React from 'react';
import './nav.css';
import icon from '../assets/dropdown.png';


function Filter(props) {
    // const handleClick = (e) => {
    //     e.preventDefault();
   
    // }

    return ( 
            <div className="filter">
                <div className="candidate-dropdown">
                    {props.filter[0]} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                </div>
                <div className="candidate-dropdown">
                    {props.filter[1]} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                </div>
                <div className="candidate-dropdown">
                    {props.filter[2]} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                </div>
            </div>
    );
}

export default Filter;