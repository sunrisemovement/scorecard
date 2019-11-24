import React from 'react';
import './mobileNav.css';

function MobileNav(props) {

    const closeNav = (e) => {
        e.preventDefault();
        document.getElementById("myNav").style.width = "0%";
    }

    return ( 
         <div className="mobile-nav-container">
            <div id="myNav" class="overlay">

            <span onClick={closeNav} className="sc-nav-close">&times;</span> 

            <div class="sunrise-overlay-content">
                <div id="sunrise-overlay-item"><a href="https://sunrisemovement.org">HOME</a></div>
                <div id="sunrise-overlay-item"><a href="https://www.sunrisemovement.org/about">ABOUT</a></div>
                <div id="sunrise-overlay-item"><a href="https://www.sunrisemovement.org/green-new-deal">GREEN NEW DEAL</a></div>
                <div id="sunrise-overlay-item"><a href="https://www.sunrisemovement.org/current-initiatives">TAKE ACTION</a></div>
                <div id="sunrise-overlay-item"><a href="https://www.sunrisemovement.org/news-1">NEWS</a></div>
                <div id="sunrise-overlay-item"><a href="https://sunrisemovement.myshopify.com/">SHOP</a></div>
                <br></br>
                <div id="sunrise-overlay-item"><a href="https://secure.actblue.com/donate/climate-strike-campaign?refcode=website-top-button">DONATE</a></div>
            </div>
        
        </div>
        </div>
    );
}

export default MobileNav;