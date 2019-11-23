import React from 'react';
import './sunriseFooter.css';

function SunriseFooter(props) {

    return ( 
         <div className="sunrise-footer">
            <div className="donate-button">
            DONATE
            </div>
            <div className="sunrise-footer-links">
                <div id="sunrise-footer-item">JOBS</div>
                <div id="sunrise-footer-item">PRIVACY POLICY</div>
                <div id="sunrise-footer-item">LEGAL</div>
                <div id="sunrise-footer-item">CONTACT</div>
                <div id="sunrise-footer-item">MEDIA KIT</div>
            </div>
            <div className="sunrise-copyright">
            © 2019 Sunrise. 
            </div>
        </div>
    );
}

export default SunriseFooter;