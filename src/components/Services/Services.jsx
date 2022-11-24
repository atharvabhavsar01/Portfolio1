import React from 'react';
import './Services.css';
import heartemoji from '../../img/heartemoji.png';
import Card from '../Card/Card.jsx';
const Services = (props) => {
  return (
    <>
      <div className="service">
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
            emoji={heartemoji}
            heading={'UI/UX'}
            detail={'Canva, Figma, Adobe'}
          />

          </div>

          <div style={{left:'25rem'}}>

           <Card
            emoji={heartemoji}
            heading={'Full-stack Development'}
            detail={'Reactjs,Node.js,Express'}
          />

          </div>

          <div style={{left:'50rem'}}>

           <Card
            emoji={heartemoji}
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
