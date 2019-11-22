import React from 'react';
import './header.css';
import Nav from './nav.js'
import sunrise from '../assets/sunrise.png';


function Header(props) {

    return ( 
         <div className="header-container">
         <header className="main-header">
            <div className="title-container">
                <h1 className="header-title">The Sunrise <br></br>Presidential Scorecard</h1> 
                <div className="caption">Click on a candidate's score for more details on their plan.</div>
            </div>
            <div className="sunrise-logo">
             <img id="sunrise-img" src={sunrise} alt="Sunrise logo"></img>
            </div>
         </header>
         <Nav onClickNav={props.onClickNav} />
        </div>
    );
}

export default Header;