import React from 'react'
import './Timeline.css'
import  {Chrono}  from 'react-chrono';

function Timeline() {

   

    return (
        <Chrono
        mode="VERTICAL_ALTERNATING"
        // showAllCardsVertical 
        twoColumns
        slideShow 
        
        // mode="VERTICAL_ALTERNATING"
      >
        <div  id="education" style={{color:'var(--orange)'}}>
          <h3>10th board</h3>
          <ul>
            <li>j.d.c. bytco english medium high school,nashik.</li>
            <li>93%</li>
          </ul>
        </div>
        <div style={{color:'var(--orange)'}}>
          <h3>12th board</h3>
          <ul>
            <li>Bytco collge,nashik.</li>
            <li>82%</li>
          </ul>
        </div>
        <div style={{color:'var(--orange)'}}>
          <h3>BE</h3>
          <ul>
            <li>K. K. Wagh Institute of engineering education and research ,nashik. </li>
            <li>Sgpa 9.05</li>
          </ul>
        </div>
        <div style={{color:'var(--orange)'}}>
          <h3>Milestone yet to achieve!</h3>
          {/* <ul>
            <li> </li>
            <li> </li>
          </ul> */}
        </div>  
         
      </Chrono>
    
    )
}

export default Timeline
