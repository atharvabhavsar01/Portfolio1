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
        <div>
          <h3>This is a List</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div>
          <h3>This is a List</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div>
          <h3>This is a List</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div>
          <h3>This is a List</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>  
         
      </Chrono>
    
    )
}

export default Timeline
