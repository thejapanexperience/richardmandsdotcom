import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <div className="backgroundImage"/>
      <div className='mainContainer'>

        <div className="section0">
          <div className="navBox">
            <div className="nav1">
              <div className="nav1Text">
                richardmands.com
              </div>
            </div>
            <div className="nav2" />
            <div className="nav3">
              <div className="nav3Text">
                {/* Coding */}
              </div>
              <div className="nav3Text">
                {/* My Work */}
              </div>
            </div>
            <div className="nav4">
              <div className="nav4Text">
                {/* Skills */}
              </div>
              <div className="nav4Text">
                {/* Resume */}
              </div>
            </div>
            <div className="nav5"></div>
            <div className="nav6" />
          </div>
        </div>

        <div className="section1Box">
          <div className="section1Box">

            <div className="section1">
              <div className="flexImage">
                <img className="section1BoxImage" src="../images/richard1Crop.jpg" alt="richardmands"/>
              </div>
              <div className="flexText">
                <div className="section1Text1">
                  Richard Mands
                </div>
                <div className="section1Text2">
                  Full-Stack Javascript Developer.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2Box">
          <div className="section2" />
        </div>
        <div className="section3Box">
          <div className="section3" />
        </div>
        <div className="section4Box">
          <div className="section4" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
