import React from 'react';
import './nav.css';

function Nav(props) {
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.id !== "") {
            props.onClickNav(e.target.id)
        }
    }

    return ( 
         <div className="navbar" onClick={handleClick}>
            <div id="1" className="nav-item first" >How they talk about it</div>
            <div id="2" className="nav-item" >How much they talk about it</div>
            <div id="3" className="nav-item" >Plan to win</div>
            <div id="4" className="nav-item" >Green New Deal vision</div>
            <div id="5" className="nav-item" >Totals</div>
         </div>
    );
}

export default Nav;