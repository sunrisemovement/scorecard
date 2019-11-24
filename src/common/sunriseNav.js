import React from 'react';
import './sunriseNav.css';

function SunriseNav(props) {

    return ( 
         <div className="sunrise-navbar">
            <div className="sunrise-nav-logo">
                 <img id="sunrise-text-logo" alt="Main Sunrise Logo" src="https://images.squarespace-cdn.com/content/59cc24c8e3df286f13ce044b/1527101088181-FI0RQ0BRZV4CNKOVV257/Sunrise-Horizontal-Primary.png?content-type=image%2Fpng"></img>
            </div>
            <div className="sunrise-nav-links">
              <div id="sunrise-nav-item"><a href="https://sunrisemovement.org">HOME</a></div>
              <div id="sunrise-nav-item"><a href="https://www.sunrisemovement.org/about">ABOUT</a></div>
              <div id="sunrise-nav-item"><a href="https://www.sunrisemovement.org/green-new-deal">GREEN NEW DEAL</a></div>
              <div id="sunrise-nav-item"><a href="https://www.sunrisemovement.org/current-initiatives">TAKE ACTION</a></div>
              <div id="sunrise-nav-item"><a href="https://www.sunrisemovement.org/news-1">NEWS</a></div>
              <div id="sunrise-nav-item"><a href="https://sunrisemovement.myshopify.com/">SHOP</a></div>
            </div>
            <img id="hamburger-menu" alt="Expand menu icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZGUxNiI+PHBhdGggZD0iTTAsMjUuOHYxNy4yaDE3MnYtMTcuMnpNMCw3Ny40djE3LjJoMTcydi0xNy4yek0wLDEyOXYxNy4yaDE3MnYtMTcuMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="></img>
        </div>
    );
}

export default SunriseNav;