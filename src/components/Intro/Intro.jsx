import React from 'react';
import './Intro.css';

import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import mainB from '../../img/mainB.png';
import vector1 from '../../img/Vector1.png';
import working from '../../img/working.gif';

import blueboy from '../../img/blueboy.png'
const Intro = () => {
    return (
         <div className="Intro">
            <div className="intro-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Atharva Bhavsar</span>
                    <span>Full stack Web-developer with good experience in web designing and delivering quality products.</span>
                </div>
                    
                    <a href="https://www.linkedin.com/in/atharva-bhavsar-0877761b1'">
                <button className="button i-button">
                        
                        Download CV
                </button>
                        
                        </a>

                <div className="i-icons">

                    <a href='https://github.com/atharvabhavsar01'>
                    <img src={github} alt="github" />

                    </a>

                    <a href='https://www.linkedin.com/in/atharva-bhavsar-0877761b1'>
                    <img src={linkedin} alt="LinkedIn" />

                    </a>
                </div>

            </div>
            <div className="intro-right">
                    <img src={mainB} alt="" />
                    <img src={vector1} alt="" />
                    <img src={blueboy} alt="" />
                    <div className="blur">

                    </div>
                    <div className="blur2">

                    </div>
            </div>
         </div>
    );
};

export default Intro;