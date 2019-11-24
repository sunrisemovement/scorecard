import React from 'react';
import './nav.css';
import Scrollspy from 'react-scrollspy'

function Nav(props) {
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.id !== "") {
            props.onClickNav(e.target.id)
        }
    }

    return ( 
         <Scrollspy componentTag={ "div" } className="navbar" offset={ -250 } items={ ['table-1', 'table-2', 'table-3', 'table-4', 'table-8'] } currentClassName="is-current">
            <div id="1" onClick={handleClick} className="nav-item first">How they talk about it</div>
            <div id="2" onClick={handleClick} className="nav-item" >How much they talk about it</div>
            <div id="3" onClick={handleClick} className="nav-item" >Plan to win</div>
            <div id="4" onClick={handleClick} className="nav-item" >Green New Deal vision</div>
            <div id="9" onClick={handleClick} className="nav-item" >Totals</div>
        </Scrollspy>
    );
}

export default Nav;