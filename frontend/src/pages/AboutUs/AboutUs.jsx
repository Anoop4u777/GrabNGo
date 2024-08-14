import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
    return(
        <div className="container">
        <h1 className="text-center mb-5">Our Members</h1>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Anoop Krishnan Ramachandran</h5>
                <h5 className="card-title text-center">8826078</h5>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Avdhesh Datta</h5>
                <h5 className="card-title text-center">8921656</h5>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Chaz Swan</h5>
                <h5 className="card-title text-center">8749159</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;