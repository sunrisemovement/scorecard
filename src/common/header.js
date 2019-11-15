import React from 'react';
import './header.css';
import Nav from './nav.js'
import sunrise from '../assets/sunrise.png';


function Header(props) {

    return ( 
         <div className="header-container">
         <header className="main-header">
            <div>
                <h1 className="header-title">The Sunrise <br></br>Presidential Scorecard</h1> 
                <div className="caption">Click on a candidate's score for more details on their plan.</div>
            </div>
            <h1 className="mh-logo">
            <img src={sunrise} alt="Sunrise logo"></img>
            </h1>
         </header>
         <Nav onClickNav={props.onClickNav} />
        </div>
    );
}

export default Header;