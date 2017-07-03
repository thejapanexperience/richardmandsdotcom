import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PortfolioBox from './PortfolioBox';
import Resume from './Resume';
import ResumeColumn from './ResumeColumn';
// import {Link} from 'react-router';

export default class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      showResume: false,
      buttonText1: 'Show résumé?',
      buttonText2: 'Hide résumé?',
      buttonText: 'Show résumé?',
    };

    this.resumeColumnClick = this.resumeColumnClick.bind(this);
    this.resumeClick = this.resumeClick.bind(this);

  }

  componentDidMount() {
    window.addEventListener("scroll", function(event) {
      let top = this.scrollY;
      let left =this.scrollX;
      let height0 = $('#section0Box').outerHeight(true);
      let height1 = $('#section1Box').outerHeight(true);
      let height2 = $('#section2Box').outerHeight(true);
      let height3 = $('#section3Box').outerHeight(true);
      let totalHeight = height0 + height1 + height2 - 150;
      if (top > totalHeight){
          document.getElementById('section0Nav').className="section0Gone";
          document.getElementById('navText').className="nav1TextGone";
      }
      if (top <= totalHeight){
          document.getElementById('section0Nav').className="section0";
          document.getElementById('navText').className="nav1Text";
      }
    }, false);
  }

  componentWillUnmount() {
          window.removeEventListener('scroll');
  }

  resumeColumnClick(e){
    e.preventDefault();
    if (!this.state.showResume){
      document.getElementById('resumeColumn').className ='resumeBox';
      document.getElementById('resumeColumnButton').className ='tabBarTabResume';
      document.getElementById('resumeButton').className ='tabBarTabResume';
      this.setState({
        showResume: true,
        buttonText: this.state.buttonText2,
      })
    } else {
      document.getElementById('resumeColumn').className ='resumeBoxHide';
      document.getElementById('resumeColumnButton').className ='tabBarTabActiveResume';
      document.getElementById('resumeButton').className ='tabBarTabActiveResume';
      this.setState({
        showResume: false,
        buttonText: this.state.buttonText1,
      })
    }
  }

  resumeClick(e){
    e.preventDefault();
    if (!this.state.showResume){
      document.getElementById('resume').className ='resumeBox';
      document.getElementById('resumeButton').className ='tabBarTabResume';
      document.getElementById('resumeColumnButton').className ='tabBarTabResume';
      this.setState({
        showResume: true,
        buttonText: this.state.buttonText2,
      })
    } else {
      document.getElementById('resume').className ='resumeBoxHide';
      document.getElementById('resumeButton').className ='tabBarTabActiveResume';
      document.getElementById('resumeColumnButton').className ='tabBarTabActiveResume';
      this.setState({
        showResume: false,
        buttonText: this.state.buttonText1,
      })
    }
  }

  render() {

    return (
    <div>
      {/* <div className="backgroundImage" /> */}
      <div className="imageCache">
        <img src={require("../images/Entable.png")} alt="Entable"/>
        <img src={require("../images/eduku.png")} alt="Eduku"/>
        <img src={require("../images/richardmandsdotcom.png")} alt="richardmands.com"/>
        <img src={require("../images/theFastLife.png")} alt="The Fast Life"/>
      </div>
      <div className="mainContainer" ref="mainContainer">
        <div className="navPadding" id="section0Box" />
        <div className="section0" id="section0Nav">

          <div className="navBox">
            <div className="nav1">
              <div className="nav1Text" id="navText">
                richardmands.com
              </div>
            </div>
          </div>
        </div>

        <div className="section1Box" id="section1Box">
          <div className="section1">
            <div className="section1Image">
              <img className="section1BoxImage" src={require("../images/RichardColorVertical900.jpg")} alt="richardmands"/>
            </div>
            <div className="flexText">
              <div className="section1Text1">
                Richard Mands
              </div>
              <div className="section1Text2">
                Full-Stack Javascript Developer
              </div>
              <div className="section1Text3Box">
                <a className="section1Text3" target="_blank" href="https://github.com/thejapanexperience"><i className="fa fa-github fa-lg" /></a><span className="section1Text3"> | </span>
                <a className="section1Text3" target="_blank" href="https://twitter.com/RichardMands"><i className="fa fa-twitter fa-lg" /></a><span className="section1Text3"> | </span>
                <a className="section1Text3" target="_blank" href="https://www.facebook.com/richard.mands"><i className="fa fa-facebook fa-lg" /></a><span className="section1Text3"> | </span>
                <a className="section1Text3" target="_blank" href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"><i className="fa fa-linkedin fa-lg" /></a>
                {/* <span className="section1Text3"> | </span>
                <a className="section1Text3" target="_blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg" /></a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="section2Box" id="section2Box">
          <div className="section2" >
            <div className="section2Text">
              <span className="section2TextTitle">
                Please allow me to introduce myself ...
              </span>
              <div className="section2TextBodyBox">
                {/* {bioFull} */}
                <div className="section2TextBody">
                  I'm a full-stack javascript developer. Working predominantly with a MERN Stack, I am proficient with React, Redux, Flux, Node, Express, MongoDB, Mongoose, Webpack, and have experience with jQuery, Firebase, Auth0, Amazon Web Services, GoogleAPIs and more.
                </div>
                <div className="section2TextBody">
                  Able to learn and adapt quickly to new technologies, I bring with me a real passion for what I do, a fierce work-ethic and an honest desire to leave the world a better place each day.
                </div>
                <div className="section2TextBody">
                  I have 3 years experience coding, designing and marketing as co-founder of <a target="_blank" href='http://www.cinderhouse.com.au/'>Cinderhouse Creative</a>.
                </div>
                <div className="section2TextBody">
                  Through Cinderhouse Creative, I am a co-founder / lead developer of <a target="_blank" href='http://www.eduku.org/'>Eduku</a>, a social enterprise (self-funded charity), that aims to raise funds for those lacking educational opportunities in low-income countries via an exciting online learning platform.
                </div>
                <div className="section2TextBody">
                  I was also part of the team that won Cisco's first prize at AngelHack's Lady Problems hackathon in San Francisco in October 2016 for creating Entable (an sms-based online banking platform aimed spefically at supporting women in low-income countries by offering wider access to microfinance).
                </div>
              </div>


              <div className="iconBoxOuter">

                <div className="iconBoxJS">
                  <div className="iconBoxImageBoxJS">
                    <img className="iconBoxImageJS" src={require("../images/techIcons300/Javascript.png")} alt="Javascript"/>
                  </div>
                </div>

                <div className="iconBox">
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/HTML5CSS3.png")} alt="HTMLCSS"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/Sass.png")} alt="Sass"/>
                  </div>
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
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/webpack.png")} alt="Webpack"/>
                  </div>
                  <div className="iconBoxImageBox">
                    <img className="iconBoxImage" src={require("../images/techIcons300/github.png")} alt="github"/>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>

        <div className="section3Box" id="section3Box" ref="section3Box">
          <PortfolioBox/>
          <br/>
          <div className="section4">
            <div className="section4Title">
              MINI-PROJECTS
            </div>
            <div className="section4Text">
              These projects are designed to showcase the usage of basic javascript technologies.
            </div>
            <div className="section4ImageBox">
              <div className="section4Image">
                <a target="_blank" href="https://github.com/thejapanexperience">
                  <img className="iframe" src={require("../images/github.png")} />
                </a>
              </div>
            </div>
            <div className="miniProjectBox">
              <div className="miniProject">
                <a target="_blank" href="https://github.com/thejapanexperience/miniProjectsReact-Dnd" className="miniProjectLink">
                  React-DnD - Drag and drop using React and React-dnd
                </a>
              </div>
              <div className="miniProject">
                <a target="_blank" href="https://github.com/thejapanexperience/immersive-learning" className="miniProjectLink">
                  Study Bubble - A VR learning environment using A-Frame
                </a>
              </div>
              {/* <div className="miniProject">
                <a target="_blank" href="https://github.com/thejapanexperience/friendalizer" className="miniProjectLink">
                  Friendalizer - Watson / Microsoft Cognitive Services
                </a>
              </div> */}
              <div className="miniProject">
                <a target="_blank" href="https://github.com/thejapanexperience/PokemonAPIViewer2" className="miniProjectLink">
                  PokeAPI - Using data from an external API
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section4Box">
          <div className="section4">
            <div className="section4Title">
              MINI-PROJECTS
            </div>
            <div className="section4Text">
              These projects are designed to showcase the usage of basic javascript technologies.
            </div>
            <div className="section4ImageBox">
              <div className="section4Image">
                <a target="_blank" href="https://github.com/thejapanexperience">
                  <img className="iframe" src={require("../images/github.png")} />
                </a>
              </div>
            </div>
            <div className="miniProjectBox">
              <div className="miniProject">
                <a target="_blank" href="https://github.com/thejapanexperience/miniProjectsReact-Dnd" className="miniProjectLink">
                  React-DnD - Drag and drop using React and React-dnd
                </a>
              </div>
              <div className="miniProject">
                <a target="_blank" href="https://github.com/thejapanexperience/immersive-learning" className="miniProjectLink">
                  Study Bubble - A VR learning environment built using A-Frame
                </a>
              </div>
              <div className="miniProject">
                <a target="_blank" href="https://github.com/thejapanexperience/friendalizer" className="miniProjectLink">
                  Friendalizer - IBM Watson and Microsoft Cognitive Services
                </a>
              </div>
              <div className="miniProject">
                <a target="_blank" href="https://github.com/thejapanexperience/PokemonAPIViewer2" className="miniProjectLink">
                  PokeAPI - Using data from an external API
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div className="section6Box">
          <div className="section6">
            <div className="section6Title">
              <div className="section6TitleText">
                CONTACT
              </div>
            </div>
            <div className="section6Title">
              <div className="section6Text">
                richard@eduku.org
              </div>
            </div>
            <div className="section6Title">
              <div className="section6IconsBox">
                <a className="section6Icons" target="_blank" href="https://github.com/thejapanexperience"><i className="fa fa-github fa-lg" /></a><span className="section6Icons"> | </span>
                <a className="section6Icons" target="_blank" href="https://twitter.com/RichardMands"><i className="fa fa-twitter fa-lg" /></a><span className="section6Icons"> | </span>
                <a className="section6Icons" target="_blank" href="https://www.facebook.com/richard.mands"><i className="fa fa-facebook fa-lg" /></a><span className="section6Icons"> | </span>
                <a className="section6Icons" target="_blank" href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"><i className="fa fa-linkedin fa-lg" /></a>
                {/* <span className="section6Icons"> | </span>
                <a className="section6Icons" target="_blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg" /></a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="section5Box">
          <div className="section5">
            <div className="section5Title">
              RÉSUMÉ
            </div>
            <div className="section5Text">
              <a target="_blank" href="https://drive.google.com/open?id=0B6GYiEdGHBSDc0hMakI1a3FqRHc" className="resumeLink">
                Download pdf
              </a>
              <span> / </span>
              <a target="_blank" href="https://drive.google.com/file/d/0B6GYiEdGHBSDM25wckxSNzBYM1k/view?usp=sharing" className="resumeLink">
                Download word
              </a>
            </div>
            {/* <div className="portfolioYoutubeBoxSmall">
              <div className="portfolioYoutubeVideo">
                <iframe className="iframe" src="https://www.youtube.com/embed/u5G2dffogDo" frameBorder="0" allowFullScreen />
              </div>
              </div>
              <div className="section5Text2">
              Lorem oopsum lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div> */}
            <ResumeColumn resumeColumnClick={this.resumeColumnClick} buttonText={this.state.buttonText} showResume={this.state.showResume}/>
            <Resume resumeClick={this.resumeClick} buttonText={this.state.buttonText} showResume={this.state.showResume}/>
          </div>
        </div>


        <div className="section7Whole">

          <div className="section7HeaderBox">
            <div className="section7Header">
              <div className="section7Title">
                OTHER SKILLS
              </div>
            </div>
          </div>

          <div className="section7Box1">
            <div className="section7">
              <div className="section7Title2">
                EDUCATION & TRAINING
              </div>
              <div className="section7Text">
                I'm a UK qualified secondary science teacher with a decade of classroom teaching experience. In that time, as well as day-to-day teaching, I have developed original curricula, managed student assessment data, introduced Google Drive into student assessment and feedback at my school, won a technology development prize from my schools group, led teacher training sessions (mostly based around usage of technology) and been a leader in developing social enterprise / charitable giving. <br/>
                <br/>
                These are all experiences that have helped me develop the ability to understand and communicate new technologies in a clear and effective way.
              </div>
            </div>
          </div>

          <div className="section7Box2">
            <div className="section72">
              <div className="section7Title2">
                PHOTOGRAPHY
              </div>
              <div className="section7Text">
                I'm a passionate and experienced photographer, having shot a wide variety of jobs ranging in style from in-studio product shots, to on location portraiture and events. I am proficient with Photoshop, Lightroom and the whole suite of available plug-ins that expand Adobe's software.<br/>
                <br/>
                I own a range of professional cameras and lenses and would love to use my photography skills to support any organisation I work for. <br/>
              </div>
              <div className="section7ImageBox">
                <img className="section7Image" src={require("../images/richardCollageWide02.jpg")} alt="richardmandsphotography"/>
              </div>
            </div>
          </div>

          <div className="section7Box1">
            <div className="section7">
              <div className="section7Title2">
                VIDEOGRAPHY & EDITING
              </div>
              {/* <div className="section7Title2">
                AND EDITING
              </div> */}
              <div className="section7Text">
                I have experience shooting a variety of projects that range from in-studio promos and product shots to on-location events and even 360 video (using a multi-camera GoPro rig). I shoot with professional standard cameras (Panasonic GH4) and lenses in 4K. <br/>
                <br/>
                I am proficient with Adobe Premiere Pro, After-Effects (mostly text animations) and Audition. I also have experience with recording high quality audio using shotgun, lavalier and traditional dynamic microphones recorded onto a variety of Zoom external recorders (H1, H5). <br/>
                <br/>
                As with my photography skills, it would be great to utilise my videography experience (if possible) alongside a role as a developer.
              </div>
              <div className="section7YoutubeBox">
                <div className="portfolioYoutubeBox">
                  <div className="portfolioYoutubeVideo">
                    <iframe className="iframe" src="https://www.youtube.com/embed/U_icV5LqHKA" frameBorder="0" allowFullScreen />
                  </div>
                </div>
              </div>
              <div className="section7YoutubeBox">
                <div className="portfolioYoutubeBox">
                  <div className="portfolioYoutubeVideo">
                    <iframe className="iframe" src="https://www.youtube.com/embed/erew-BmkB6o"  frameBorder="0" allowFullScreen />
                  </div>
                </div>
              </div>
              <div className="section7YoutubeBox">
                <div className="portfolioYoutubeBox">
                  <div className="portfolioYoutubeVideo">
                    <iframe className="iframe" src="https://www.youtube.com/embed/cdvg_jTrjlg" frameBorder="0" allowFullScreen />
                  </div>
                </div>
              </div>
              <div className="section7YoutubeBox">
                <div className="portfolioYoutubeBox">
                  <div className="portfolioYoutubeVideo">
                    <iframe className="iframe" src="https://www.youtube.com/embed/De1DiZgcEy0" frameBorder="0" allowFullScreen />
                  </div>
                </div>
              </div>
              <div className="section7YoutubeBox">
                <div className="portfolioYoutubeBox">
                  <div className="portfolioYoutubeVideo">
                    <iframe className="iframe" src="https://www.youtube.com/embed/6zsAoQC8RcQ" frameBorder="0" allowFullScreen />
                  </div>
                </div>
              </div>
              <div className="section7YoutubeBox">
                <div className="portfolioYoutubeBox">
                  <div className="portfolioYoutubeVideo">
                    <iframe className="iframe" src="https://www.youtube.com/embed/1d0gc4Ux6Rc" frameBorder="0" allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="footerBox">
          {/* <div className="emptySpace" /> */}
          <div className="footer">
            <div className="footerTextBox">
              <div className="footerText">
                www.richardmands.com
              </div>
              <div className="footerText2">
                created by Richard Mands
              </div>
            </div>
          </div>
          <div className="footer">
            <span className="footerIcons">
              <a className="footerText3" target="_blank" href="https://github.com/thejapanexperience"><i className="fa fa-github fa-lg" /></a><span className="footerText3"> | </span>
              <a className="footerText3" target="_blank" href="https://twitter.com/RichardMands"><i className="fa fa-twitter fa-lg" /></a><span className="footerText3"> | </span>
              <a className="footerText3" target="_blank" href="https://www.facebook.com/richard.mands"><i className="fa fa-facebook fa-lg" /></a><span className="footerText3"> | </span>
              <a className="footerText3" target="_blank" href="https://www.linkedin.com/in/richard-mands-a99955119?trk=hp-identity-name"><i className="fa fa-linkedin fa-lg" /></a>
              {/* <span className="footerText3"> | </span>
              <a className="footerText3" target="_blank" href="https://medium.com/@RichardMands"><i className="fa fa-medium fa-lg" /></a> */}
            </span>
          </div>
        </div>

      </div>
    </div>
      );
      }
      }
