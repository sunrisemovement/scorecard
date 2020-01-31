import React from 'react';
import './sunriseFooter.css';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import mail from '../assets/mail.png';
import medium from '../assets/medium.png';
import youtube from '../assets/youtube.png';



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
                <a href="https://www.facebook.com/sunrisemvmt/" target="_blank" rel="noopener noreferrer"><img id="sunrise-social-icon" alt="Facebook social button" src={fb}></img></a>
                <a href="https://medium.com/sunrisemvmt" target="_blank" rel="noopener noreferrer"><img id="sunrise-social-icon" alt="Medium social button" src={medium}></img></a>
                <a href="mailto:team@sunrisemovement.org"><img id="sunrise-social-icon" alt="Email button" src={mail}></img></a>
                <a href="https://www.youtube.com/channel/UCEorX5YWm_jAKknP7TY5l6Q" target="_blank" rel="noopener noreferrer"><img id="sunrise-social-icon" alt="Youtube social button" src={youtube}></img></a>
                <a href="https://instagram.com/sunrisemvmt" target="_blank" rel="noopener noreferrer"><img id="sunrise-social-icon" alt="Instagram social button" src={insta}></img></a>
            </div>
            <div className="sunrise-copyright">
            © {new Date().getFullYear()} Sunrise. 
            </div>
        </div>
    );
}

export default SunriseFooter;