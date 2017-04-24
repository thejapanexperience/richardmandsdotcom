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
                Coding
              </div>
              <div className="nav3Text">
                My Work
              </div>
            </div>
            <div className="nav4">
              <div className="nav4Text">
                Skills
              </div>
              <div className="nav4Text">
                Resume
              </div>
            </div>
            <div className="nav5"></div>
            <div className="nav6" />
          </div>
        </div>

        <div className="section1Box">
          <div className="section1">
            <div className="section1Image">
              <img className="section1BoxImage" src="../images/richard1Crop.jpg" alt="richardmands"/>
            </div>
            <div className="flexText">
              <div className="section1Text1">
                Richard Mands
              </div>
              <div className="section1Text2">
                Full-Stack Javascript Developer
              </div>
              <div className="section1Text3Box">
                <a className="section1Text3" target="blank" href="https://github.com/thejapanexperience"><i className="fa fa-github fa-lg"></i></a>
                <a className="section1Text3" target="blank" href="https://www.facebook.com/richard.mands"><i className="fa fa-facebook fa-lg"></i></a>
                <a className="section1Text3" target="blank" href="https://twitter.com/RichardMands"><i className="fa fa-twitter fa-lg"></i></a>
                <a className="section1Text3" target="blank" href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"><i className="fa fa-linkedin fa-lg"></i></a>
                <a className="section1Text3" target="blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="section2Box">
          <div className="section2" >
            <div className="sectionText">
              <span className="sectionTextTitle">
                Let me introduce myself...
              </span>
              <span className="sectionTextBody">
                I'm a full-stack javascript developer. Working predominantly with a MERN Stack, I have experience implementing React, React Native, jQuery, Redux, Flux, Node, Express, Mongo, Firebase, Amazon Web Services, GoogleAPIs and more into my apps. I'm strongly self-reliant and am able to quickly learn and incorporate new javascript technologies into my projects. I was part of the team that won the Cisco developer prize at the Lady Problems hackathon in San Francisco in October 2016.
              </span>
              <div className="iconBox">
                <div className="iconBoxImageBox">
                  <img className="iconBoxImageSmall" src="../images/techIcons300/Javascript.png" alt="Javascript"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/React.png" alt="React"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/ReactNative.png" alt="ReactNative"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/Redux.png" alt="Redux"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/SocketIO.png" alt="SocketIO"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImageSmall" src="../images/techIcons300/Amazon.png" alt="Amazon"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/Express.png" alt="Express"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/Firebase.png" alt="Firebase"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/Flux2.png" alt="Flux2"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/Google.png" alt="Google"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/jQuery.png" alt="jQuery"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/Mongo.png" alt="Mongo"/>
                </div>
                <div className="iconBoxImageBox">
                  <img className="iconBoxImage" src="../images/techIcons300/Node.png" alt="Node"/>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="section3Box">
          <div className="section3">
            <div className="section1Image">
              <img className="section1BoxImage" src="../images/richard1Crop.jpg" alt="richardmands"/>
            </div>
            <div className="flexText">
              <div className="section1Text1">
                Richard Mands
              </div>
              <div className="section1Text2">
                Full-Stack Javascript Developer
              </div>
              <div className="section1Text3Box">
                <a className="section1Text3" target="blank" href="https://github.com/thejapanexperience"><i className="fa fa-github fa-lg"></i></a>
                <a className="section1Text3" target="blank" href="https://www.facebook.com/richard.mands"><i className="fa fa-facebook fa-lg"></i></a>
                <a className="section1Text3" target="blank" href="https://twitter.com/RichardMands"><i className="fa fa-twitter fa-lg"></i></a>
                <a className="section1Text3" target="blank" href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"><i className="fa fa-linkedin fa-lg"></i></a>
                <a className="section1Text3" target="blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="section4Box">
          <div className="section4" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
