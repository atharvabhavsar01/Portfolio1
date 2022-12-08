import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle.jsx';
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Atharva</div>
        {/* <div className="n-toggle"></div> */}
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              {' '}
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li><Link to="education" spy={true} smooth={true}>
                Education
              </Link></li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="button n-btn">

          <Link to="contact" spy={true} smooth={true}>
            <span>Contact</span>
                
              </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
