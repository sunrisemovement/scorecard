import React from 'react';
import './sunriseFooter.css';

function SunriseFooter(props) {

    return ( 
         <div className="sunrise-footer">
            <div className="donate-button">
            DONATE
            </div>
            <div className="sunrise-footer-links">
                <div id="sunrise-footer-item">HOME</div>
                <div id="sunrise-footer-item">ABOUT</div>
                <div id="sunrise-footer-item">GREEN NEW DEAL</div>
                <div id="sunrise-footer-item">TAKE ACTION</div>
                <div id="sunrise-footer-item">NEWS</div>
                <div id="sunrise-footer-item">SHOP</div>
            </div>
            <div className="sunrise-copyright">
            © 2019 Sunrise. 
            </div>
        </div>
    );
}

export default SunriseFooter;