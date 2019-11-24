import React from 'react';
import './sunriseFooter.css';

function SunriseFooter(props) {

    return ( 
         <div className="sunrise-footer">
            <div id="donate-button">
                <a className="donate-button" href="https://secure.actblue.com/donate/climate-strike-campaign?refcode=website-footer-button">
                 DONATE
                </a>
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