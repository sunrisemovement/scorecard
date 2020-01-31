import React from 'react';
import './nav.css';
import Scrollspy from 'react-scrollspy'
import Filter from './filter.js'
import throttle from 'lodash/throttle';


function Nav(props) {
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.id !== "") {
            props.onClickNav(e.target.id)
        }
    }
    
    var wideWidth = window.matchMedia("(min-width: 790px)");

    const checkHeader = throttle(() => { 
        var nav = document.getElementsByClassName("nav-scrollspy")[0];

        if (wideWidth.matches && (window.scrollY > 473)) {
            nav.classList.add("dark-nav");
        } else {
            nav.classList.remove("dark-nav");
        }
    }, 250);

    // Add color change on nav scroll for phase 2
    if (props.filterEnabled) window.addEventListener('scroll', checkHeader);

    var offset = props.filterEnabled ? -150 : -100;

    return ( 
        <div className="navbar">

            <Scrollspy componentTag={ "div" } className="nav-scrollspy" offset={ offset } items={ ['table-1', 'table-2', 'table-3', 'gnd-section', 'table-9'] } currentClassName="is-current">
                <div id="1" onClick={handleClick} className="nav-item first">How they talk about it</div>
                <div id="2" onClick={handleClick} className="nav-item" >How much they talk about it</div>
                <div id="3" onClick={handleClick} className="nav-item" >Plan to win</div>
                <div id="4" onClick={handleClick} className="nav-item" >Green New Deal vision</div>
                <div id="9" onClick={handleClick} className="nav-item" >Totals</div>
            </Scrollspy>

            {props.filterEnabled && 
                <Filter 
                filter={props.filter}
                handleFilterChange={props.handleFilterChange}
                candidates = {props.candidates} />
            }
                
        </div>
    );
}

export default Nav;