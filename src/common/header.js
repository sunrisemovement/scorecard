import React from 'react';
import './header.css';
import sunrise from '../assets/sunrise.png';


function Header(props) {

    return ( 
         <div className="header-container">
         <header className="main-header">
            <div className="title-container">
                <h1 className="header-title">SUNRISE 2020 PRESIDENTIAL CANDIDATE SCORECARD</h1> 
            </div>
            <div className="sunrise-logo">
             <img id="sunrise-img" src={sunrise} alt="Sunrise logo"></img>
            </div>
         </header>
         <div className="caption">
         Click on a candidate’s score for more details on their plan. This page will be updated with other Democratic candidates’ scores in the coming months. Please speak out and let every candidate know you want them to adopt all of these policies. It is vital for every candidate to fully adopt the policies and messaging framework set out in this scorecard.
        </div>
        </div>
    );
}

export default Header;