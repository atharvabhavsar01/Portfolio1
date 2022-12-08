import React from 'react';
import './Github.css'
import GitHubCalendar from 'react-github-calendar';
 

const Github = () => {

    
    return (

  
        // <img src="http://ghchart.rshah.org/atharvabhavsar01" alt="atharva bhavsar's Github chart" />
    <>
        <div className="heading">

        <h3>
              <span>My GitHub </span>
          </h3>
      
        </div>

        <div className="github">
        <GitHubCalendar username="grubersjoe" year={new Date().getFullYear()}  />
            
        </div>
            
    </>
            
             
      
        
       
    
        );
};

export default Github;