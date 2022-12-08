import React from 'react';
import './Services.css';
import heartemoji from '../../img/heartemoji.png';
import Card from '../Card/Card.jsx';
import design from '../../img/design.jpg';
import fullstack from '../../img/fullstack.jpg'
import db from '../../img/database.jpg'
const Services = (props) => {
  return (
    <>
      <div className="service" id="Services">
        {/* left side */} 
        <div className="awesome">
          <h3>
              <span>My services</span>
          </h3>

          <p> 
            Lorem ipsum dolor sit, amet consectetur 
          </p>
          <button className="button btn1">Hire me</button>
        </div>
        <div className="cards">
          {/* {/* right side  */}

          <div className=" blur s-blur1" style={{background:"var(--blueCard)"}}></div>
          <div style={{left:'1rem'}}>

          <Card 
            emoji={design}
            heading={'UI/UX'}
            detail={'Canva, Figma, Adobe'}
          />

          </div>

          <div style={{left:'25rem'}}>

           <Card
            emoji={fullstack}
            heading={'Full-stack Development'}
            detail={'Reactjs,Node.js,Express'}
          />

          </div>

          <div style={{left:'50rem'}}>

           <Card
            emoji={db}
            heading={'Database management'}
            detail={'MYSQL ,mongodb'}
          />
          </div>
        <div className=" blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
      </div>
    </>
  );
};

export default Services;
