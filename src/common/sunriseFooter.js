import React from 'react';
import './sunriseFooter.css';

function SunriseFooter(props) {

    return ( 
         <div className="sunrise-footer">
            <div className="donate-button">
            DONATE
            </div>
            <div className="sunrise-footer-links">
                <div id="sunrise-footer-item"><a href="https://jobs.lever.co/sunrisemovement">JOBS</a></div>
                <div id="sunrise-footer-item"><a href="https://www.sunrisemovement.org/privacy-policy">PRIVACY POLICY</a></div>
                <div id="sunrise-footer-item"><a href="https://www.sunrisemovement.org/legal">LEGAL</a></div>
                <div id="sunrise-footer-item"><a href="https://www.sunrisemovement.org/contact">CONTACT</a></div>
                <div id="sunrise-footer-item"><a href="https://www.sunrisemovement.org/media-kit">MEDIA KIT</a></div>
            </div>
            <div className="sunrise-copyright">
            © 2019 Sunrise. 
            </div>
        </div>
    );
}

export default SunriseFooter;