import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
     <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Atharva</div>
            {/* <div className="n-toggle"></div> */}
             <span>Toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:"none"}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Education</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>

                </ul>
            </div>
            <div  >
                <button className="button n-btn">
                    <span>
                    Contact

                    </span>
                    </button></div>
        </div>
     </div>
  )
}

export default Navbar
