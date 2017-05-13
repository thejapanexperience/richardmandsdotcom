import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PortfolioBox from './PortfolioBox';
// import {Link} from 'react-router';

export default class HomePage extends React.Component {

  constructor() {
    super();
    this._handleScroll = this._handleScroll.bind(this);
  }

  _handleScroll(ev) {
    console.log('ev: ', ev);
    console.log("Scrolling!");
  }

  componentDidMount() {
    window.addEventListener("scroll", function(event) {
      let top = this.scrollY;
      let left =this.scrollX;
      let height0 = $('#section0Box').outerHeight(true);
      let height1 = $('#section1Box').outerHeight(true);
      let height2 = $('#section2Box').outerHeight(true);
      let height3 = $('#section3Box').outerHeight(true);
      console.log('top: ', top);
      let totalHeight = height0 + height1 + height2;
      console.log('totalHeight: ', totalHeight);
      if (top > totalHeight){
        setTimeout(()=>{
          document.getElementById('section0Nav').className="section0Gone";
          document.getElementById('navText').className="nav1TextGone";
        },5);
      }
      if (top <= totalHeight){
        setTimeout(()=> {
          document.getElementById('section0Nav').className="section0";
          document.getElementById('navText').className="nav1Text";
        },5);
      }
    }, false);
  }

  componentWillUnmount() {
          // const list = ReactDOM.findDOMNode(this.refs.list);
          // list.removeEventListener('scroll', this._handleScroll);
  }


  render() {

    return (
    <div>
      <div className="backgroundImage"/>
      <div className="mainContainer" ref="mainContainer">
        <div className="navPadding" id="section0Box"/>
        <div className="section0" id="section0Nav">
          <div className="navBox">
            <div className="nav1">
              <div className="nav1Text" id="navText">
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
            <div className="nav5" />
            <div className="nav6" />
          </div>
        </div>

        <div className="section1Box" id="section1Box">
          <div className="section1">
            <div className="section1Image">
              <img className="section1BoxImage" src={require("../images/richard1Crop.jpg")} alt="richardmands"/>
            </div>
            <div className="flexText">
              <div className="section1Text1">
                Richard Mands
              </div>
              <div className="section1Text2">
                Full-Stack Javascript Developer
              </div>
              <div className="section1Text3Box">
                <a className="section1Text3" target="blank" href="https://github.com/thejapanexperience"><i className="fa fa-github fa-lg" /></a><span className="section1Text3"> | </span>
                <a className="section1Text3" target="blank" href="https://www.facebook.com/richard.mands"><i className="fa fa-facebook fa-lg" /></a><span className="section1Text3"> | </span>
                <a className="section1Text3" target="blank" href="https://twitter.com/RichardMands"><i className="fa fa-twitter fa-lg" /></a><span className="section1Text3"> | </span>
                <a className="section1Text3" target="blank" href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"><i className="fa fa-linkedin fa-lg" /></a><span className="section1Text3"> | </span>
                <a className="section1Text3" target="blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="section2Box" id="section2Box">
          <div className="section2" >
            <div className="section2Text">
              <span className="section2TextTitle">
                Please allow me to introduce myself...
              </span>
              <span className="section2TextBody">
                I'm a full-stack javascript developer. Working predominantly with a MERN Stack, I have experience implementing React, React Native, jQuery, Redux, Flux, Node, Express, Mongo, Firebase, Amazon Web Services, GoogleAPIs and more into my apps. I'm strongly self-reliant and am able to quickly learn and incorporate new javascript technologies into my projects. I was part of the team that won the Cisco developer prize at the Lady Problems hackathon in San Francisco in October 2016.
              </span>


              <div className="iconBoxOuter">

                <div className="iconBoxJS">
                  <div className="iconBoxImageBoxJS">
                    <img className="iconBoxImageJS" src={require("../images/techIcons300/Javascript.png")} alt="Javascript"/>
                  </div>
                </div>

                <div className="iconBox">
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/React.png")} alt="React"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/ReactNative.png")} alt="ReactNative"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/Redux.png")} alt="Redux"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/SocketIO.png")} alt="SocketIO"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImageSmall" src={require("../images/techIcons300/Amazon.png")} alt="Amazon"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/Express.png")} alt="Express"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/Firebase.png")} alt="Firebase"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/Flux2.png")} alt="Flux2"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/Google.png")} alt="Google"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/jQuery.png")} alt="jQuery"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/Mongo.png")} alt="Mongo"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/Node.png")} alt="Node"/>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>

        <div className="section3Box" id="section3Box" ref="section3Box">
          <PortfolioBox/>
        </div>

        <div className="section4Box">
          <div className="section4">
            <div className="section4Title">
              MINI-PROJECTS
            </div>
            <div className="section4Text">
              These projects are designed to showcase the usage of key javascript technologies.
            </div>
            <div className="portfolioYoutubeBoxSmall">
              <div className="portfolioYoutubeVideo">
                <iframe className="iframe" src="https://www.youtube.com/embed/u5G2dffogDo" frameBorder="0" allowFullScreen />
              </div>
            </div>
            <div className="miniProjectBox">
              <div className="miniProject">
                <a target="blank" href="https://github.com/thejapanexperience/PokemonAPIViewer2" className="miniProjectLink">
                  PokeAPI - This project presents data from an external API.
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section5Box">
          <div className="section5">
            <div className="section5Title">
              FULL RESUME
            </div>
            <div className="section5Text">
              <a target="blank" href="https://drive.google.com/open?id=0B6GYiEdGHBSDbFRteU9sWkxFMGM" className="resumeLink">
                Fancy pdf version
              </a>
              <span> / </span>
              <a target="blank" href="https://drive.google.com/open?id=0B6GYiEdGHBSDbFRteU9sWkxFMGM" className="resumeLink">
                Simple word version
              </a>
            </div>
            <div className="portfolioYoutubeBoxSmall">
              <div className="portfolioYoutubeVideo">
                <iframe className="iframe" src="https://www.youtube.com/embed/u5G2dffogDo" frameBorder="0" allowFullScreen />
              </div>
            </div>
            <div className="section5Text2">
              Lorem oopsum lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>

        <div className="section6Box">
          <div className="section6">
            <div className="section6Title">
              CONTACT ME
            </div>
            <div className="section6Text">
              richard@eduku.org
            </div>
            <div className="section6IconsBox">
              <a className="section6Icons" target="blank" href="https://github.com/thejapanexperience"><i className="fa fa-github fa-lg" /></a><span className="section6Icons"> | </span>
              <a className="section6Icons" target="blank" href="https://www.facebook.com/richard.mands"><i className="fa fa-facebook fa-lg" /></a><span className="section6Icons"> | </span>
              <a className="section6Icons" target="blank" href="https://twitter.com/RichardMands"><i className="fa fa-twitter fa-lg" /></a><span className="section6Icons"> | </span>
              <a className="section6Icons" target="blank" href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"><i className="fa fa-linkedin fa-lg" /></a><span className="section6Icons"> | </span>
              <a className="section6Icons" target="blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg" /></a>
            </div>
          </div>
        </div>

        <div className="section7Box">
          <div className="section7">
            <div className="section7Title">
              OTHER SKILLS
            </div>
            <div className="section7Title2">
              PHOTOGRAPHY
            </div>
            <div className="section7Text">
              Lorem oopsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="section7ImageBox">
              <img className="section7Image" src={require("../images/richardCollageWide02.jpg")} alt="richardmandsphotography"/>
            </div>
            <div className="section7Title2">
              VIDEOGRAPHY AND EDITING
            </div>
            <div className="section7Text">
              Lorem oopsum doloor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe className="iframe" src="https://www.youtube.com/embed/u5G2dffogDo" frameBorder="0" allowFullScreen />
                </div>
              </div>
              <div className="spacer" />
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe className="iframe" src="https://www.youtube.com/embed/u5G2dffogDo" frameBorder="0" allowFullScreen />
                </div>
              </div>
              <div className="spacer" />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
}
