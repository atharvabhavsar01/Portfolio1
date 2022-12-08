import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="content">
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Github color="white" size="3rem" />
          <Linkedin color="white" size="3rem" />
        </div>
        <div id='email1'>
          <span>atharvabhavsar01@gamil.com</span>
        </div>
        <div id='love1' className='love'>
          <span>Design with ❤️ by Atharva Bhavsar</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
