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
            <div className="sunrise-socials">
                <a href="https://www.facebook.com/sunrisemvmt/"><img id="sunrise-social-icon" alt="Facebook social button" src="https://i.imgur.com/9pc864w.png"></img></a>
                <a href="https://medium.com/sunrisemvmt"><img id="sunrise-social-icon" alt="Medium social button" src="https://i.imgur.com/gzdWCLm.png"></img></a>
                <a href="mailto:team@sunrisemovement.org"><img id="sunrise-social-icon" alt="Email button" src="https://i.imgur.com/0l3ADJw.png"></img></a>
                <a href="https://www.youtube.com/channel/UCEorX5YWm_jAKknP7TY5l6Q"><img id="sunrise-social-icon" alt="Youtube social button" src="https://i.imgur.com/qKCdzQH.png"></img></a>
                <a href="https://instagram.com/sunrisemvmt"><img id="sunrise-social-icon" alt="Instagram social button" src="https://i.imgur.com/JcbojQ4.png"></img></a>
            </div>
            <div className="sunrise-copyright">
            © 2019 Sunrise. 
            </div>
        </div>
    );
}

export default SunriseFooter;