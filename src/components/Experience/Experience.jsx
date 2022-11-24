import React from 'react'
import './Experince.css'
function Experience() {
  return (
     <>
        <div className="experience">
            {/* first */}
            <div className="achivement">
                <div className="circle">
                    1.5+
                </div>
                <span>Years</span><br />
                <span>Experince</span>
            </div>

            {/* second */}
            <div className="achivement">
                <div className="circle">
                    5+
                </div>
                <span>Completed</span><br />
                <span>Projects</span>
            </div>

            {/* third */}
            <div className="achivement">
                <div className="circle">
                    2
                </div>
                <span>Worked with</span> <br />
                <span>Companies</span>
            </div>
        </div>
     </>
  )
}

export default Experience
