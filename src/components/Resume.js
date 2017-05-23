import React from 'react';

class Resume extends React.Component {

  constructor(){
    super();
    this.state = {
      showResume: false,
      buttonText1: 'Show résumé?',
      buttonText2: 'Hide résumé?',
      buttonText: 'Show résumé?',
    };

    // this.resumeClick = this.resumeClick.bind(this);

  }

  // resumeClick(e){
  //   e.preventDefault();
  //   if (!this.state.showResume){
  //     document.getElementById('resume').className ='resumeBox';
  //     document.getElementById('resumeButton').className ='tabBarTabResume';
  //     this.setState({
  //       showResume: true,
  //       buttonText: this.state.buttonText2,
  //     })
  //   } else {
  //     document.getElementById('resume').className ='resumeBoxHide';
  //     document.getElementById('resumeButton').className ='tabBarTabActiveResume';
  //     this.setState({
  //       showResume: false,
  //       buttonText: this.state.buttonText1,
  //     })
  //   }
  // }

  render() {

    let buttonText = this.props.buttonText;

    let image =
    <div className="fourImage">
      <div className="fourInner">
        {/* <img className="img" src={require("../images/meWidishIsh.jpg")} alt=""/> */}
        <div className="resumeImage"/>
      </div>
    </div>

    let introduction =
    <div className="four">
      <div className="fourInner">
        <div className="titleBox">
          <div className="titleContent">
            INTRODUCTION
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            Since deciding to become a developer full-time, I've learned more in less time than I've ever done before. I bring with me a real passion for technology, a fierce work-ethic and an honest desire to leave the world a better place each day.
          </div>
        </div>
      </div>
    </div>

    let quickPoints =
    <div className="four">
      <div className="fourInner">
        <div className="titleBox">
          <div className="titleContent">
            QUICK POINTS
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            - Coding full-time since Aug '16<br/>
            - Cofounder/ lead developer of Eduku<br/>
            - Hackathon prize winner<br/>
            - Happy to relocate<br/>
            - Available at earliest convenience<br/>
            - Pro photographer / videographer<br/>
            - UK/Canada passport holder<br/>
          </div>
        </div>
      </div>
    </div>

    let contact =
    <div className="four">
      <div className="fourInner">
        <div className="titleBox">
          <div className="titleContent">
            CONTACT
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            Portfolio: <a target="_blank" href="http://www.richardmands.com">www.richardmands.com</a><br/>
            Phone: +86 158 5068 0774<br/>
            Email: richard@eduku.org<br/>
            <a target="_blank" href="https://www.linkedin.com/in/richardmands">www.linkedin.com/in/richardmands</a><br/>
            <a target="_blank" href="https://github.com/thejapanexperience">github.com/thejapanexperience</a><br/>
            <a target="_blank" href="https://twitter.com/RichardMands">twitter.com/RichardMands</a><br/>
            <a target="_blank" href="https://www.facebook.com/richard.mands">www.facebook.com/richard.mands</a>
          </div>
        </div>
      </div>
    </div>

    let profile =
    <div className="one">
      <div className="oneInner">

        <div className="titleBox">
          <div className="titleContent">
            PROFILE
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            - Lead developer / Co-owner of Eduku : an online education platform made using React, Redux, Express, Auth0, MongoDB.
          </div>
          <div className="contentContent">
            - Proficient in HTML, CSS, Javascript, Node.js, React, Redux, Flux, Webpack, Express, MongoDB, Mongoose.
          </div>
          <div className="contentContent">
            - Have experience of React Native, Socket.IO, Google APIs, Watson APIs, Amazon Web Services, MySQL, Firebase, Auth0, React-DnD, Tropo.
          </div>
          <div className="contentContent">
            - Won the Cisco sponsor prize at the Lady Problems hackathon in San Francisco for Entable, an sms-based, Tropo-powered table-banking system.
          </div>
          <div className="contentContent">
            - Co-creator and owner of 3 social enterprise case-studies that funded business-development competitions on <a href="https://herox.com/domogo" target="_blank">HeroX</a> for <a href="http://www.kitointl.org/" target="_blank">Kito International</a> graduates in Kenya.
          </div>
          <div className="contentContent">
            - Professional photographer, videographer and video editor on projects for Acamis, Outback Tea and Coffee, HubbloVR and SkyData, as well as Eduku.
          </div>
          <div className="contentContent">
            - Proficient with Photoshop, Lightroom, Premiere Pro, After-Effects, Audition, Autopano Video (360 video software).
          </div>
          <div className="contentContent">
            - Qualified secondary science teacher with a degree in Biochemistry and 10 years of experience working in education in the UK and Asia.
          </div>
        </div>

        {/* <div className="one50">
        </div> */}

      </div>
    </div>

    let cinderhouseEduku =
    <div className="two">
      <div className="twoInner">

        <div className="titleBox">
          <div className="titleContent">
            CINDERHOUSE / EDUKU | Oct '14 - Present
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            Partner / Co-Founder | Nanjing, China
          </div>
          <div className="contentContent">
            <a href="http://www.cinderhouse.com.au/" target="_blank">EDUKU</a> |
            Co-creator, co-owner, photographer, videographer, copy-editor, head of technology, and a million other roles.
          </div>
          <div className="contentContent">
            Jan '17 - Present | Lead developer of the Eduku platform that will allow users to interact with online learning resources as well as participate in the allocation of profits towards social outcomes.
          </div>
          <div className="contentContent">
            React and Redux front-end, Auth0 to manage authentication and user creation, a MongoDB / Express backend.
          </div>
          <div className="contentContent">
            <a href="http://www.cinderhouse.com.au/" target="_blank">CINDERHOUSE CREATIVE</a> |
            Photographer, videographer (2D and 360), video-editor, social-media manager, and more on projects for clients including Acamis, Outback Tea and Coffee, HubbloVR, SkyData.
          </div>
          <div className="contentContent">
            Co-creator of 3 social enterprise (self-funded charity) case-studies: <a href="http://eduku.org/" target="_blank">Eduku</a>, <a href="http://stockdisrupt.com/" target="_blank">Stock Disrupt</a> and <a href="http://domogo.co/" target="_blank">Domogo</a> that have featured in several publications including the BBC.
          </div>
        </div>
      </div>
    </div>

    let codingHouse =
    <div>
      <div className="titleBox">
        <div className="titleContent">
          CODING HOUSE
          | Sep '16 - Nov '16
        </div>
      </div>
      <div className="contentBox">
        <div className="contentContent">
          Student | San Francisco, USA
        </div>
        <div className="contentContent">
          Trained 14 hours a day for three months at a live-in coding bootcamp.
        </div>
        <div className="contentContent">
          React, React-Native, Flux, Redux, Node, Express, Mongo, MySQL, Firebase, jQuery, Socket.Io Amazon Web Services, Google APIs and more.
        </div>
        <div className="contentContent">
          Part of a team that won the Cisco sponsor prize at the Lady Problems hackathon in San Francisco in October 2016.
        </div>
      </div>
    </div>

    let selfStudy =
    <div>
      <div className="titleBox">
        <div className="titleContent">
          SELF-STUDY
          | Dec '16 - Present
        </div>
      </div>
      <div className="contentBox">
        <div className="contentContent">
          I have completed the following online courses:
        </div>
        <div className="contentContent">
          Pluralsight |
          <a href="https://app.pluralsight.com/library/courses/better-css/table-of-contents" target="blank"> A Better CSS: LESS and SASS</a> |
          <a href="https://app.pluralsight.com/library/courses/css3-in-depth/table-of-contents" target="blank"> CSS3 In-Depth</a> |
          <a href="https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents" target="blank"> Building Applications with React and Flux</a> |
          <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents" target="blank"> Building Applications with React and Redux in ES6</a>
        </div>
        <div className="contentContent">
          Udacity |
          <a href="https://classroom.udacity.com/courses/ud893" target="blank"> Responsive Design Fundamentals</a> |
          <a href="https://classroom.udacity.com/courses/ud882" target="blank"> Responsive Images</a>
        </div>
      </div>
    </div>

    let teaching =
    <div>
      <div className="titleBox">
        <div className="titleContent">
          TEACHING | Apr '12 - Jul '16
        </div>
      </div>
      <div className="contentBox">
        <div className="contentContent">
          <a href="https://bsn.org.cn/" target="_blank">The British School of Nanjing</a> | Science / ICT Teacher | Nanjing, China
        </div>
        <div className="contentContent">
          Taught science and ICT to students aged 10-18.
        </div>
        <div className="contentContent">
          Assessment Coordinator. Developed and implemented a google-drive based real-time assessment and feedback system for students and teachers.
        </div>
        <div className="contentContent">
          Won $2000 technology development prize from the <a href="https://www.britishschools.co.uk/" target="_blank">British Schools Foundation</a>.
        </div>
        <div className="contentContent">
          Developed training materials and led inset for  staff with the goal of improving IT integration.
        </div>
        <div className="contentContent">
          Created and led highly successful after-school programs related to charity work and fundraising.
        </div>
      </div>
    </div>

    let teachingCont =
    <div>
      <div className="titleBox">
        <div className="titleContent">
          TEACHING CONT. | Apr '04 - Mar '12
        </div>
      </div>
      <div className="contentBox">
        <div className="contentContent">
          <a href="http://www.londonacademy.org.uk/" target="_blank">London Academy</a> | Secondary Science Teacher | London, UK
        </div>
        <div className="contentContent">
          Various | English Teacher | Tokyo, Japan
        </div>
      </div>
    </div>

    let teachingQualification =
    <div>
      <div className="titleBox">
        <div className="titleContent">
          TEACHING QUALIFICATION | '09 - '10
        </div>
      </div>
      <div className="contentBox">
        <div className="contentContent">
          <a href="http://www.ucl.ac.uk/ioe" target="_blank">Institute of Education : UCL</a> | Secondary Science PGCE | London, UK
        </div>
      </div>
    </div>

    let universityDegree =
    <div>
      <div className="titleBox">
        <div className="titleContent">
          UNIVERSITY DEGREE | '99 - '03
        </div>
      </div>
      <div className="contentBox">
        <div className="contentContent">
          <a href="https://www.york.ac.uk/" target="_blank">University of York</a> | Biochemistry BSc | York, UK
        </div>
      </div>
    </div>

    let langPro =
    <div className="two">
      <div className="twoInnerFlex">
        <div className="titleBox">
          <div className="titleContent">
            LANGUAGES & LIBRARIES : Proficient
          </div>
        </div>
        <div className="twentyFive">
          <div className="contentBox">
            <div className="contentContent">
              HTML <br/>
              CSS <br/>
              Javascript <br/>
            </div>
          </div>
        </div>
        <div className="twentyFive">
          <div className="contentBox">
            <div className="contentContent">
              React.js <br/>
              Redux <br/>
              Flux <br/>
            </div>
          </div>
        </div>
        <div className="twentyFive">
          <div className="contentBox">
            <div className="contentContent">
              Express <br/>
              Node.js <br/>
              Webpack <br/>
            </div>
          </div>
        </div>
        <div className="twentyFive">
          <div className="contentBox">
            <div className="contentContent">
              MongoDB <br/>
              Mongoose <br/>
            </div>
          </div>
        </div>
      </div>
    </div>

    let langExp =
    <div className="two">
      <div className="twoInnerFlex">

        <div className="titleBox">
          <div className="titleContent">
            LANGUAGES & LIBRARIES : Experience
          </div>
        </div>

        <div className="twentyFive">
          <div className="contentBox">
            <div className="contentContent">
              MySQL <br/>
              Firebase <br/>
              Auth0 <br/>
            </div>
          </div>
        </div>

        <div className="twentyFive">
          <div className="contentBox">
            <div className="contentContent">
              Socket.IO <br/>
              Tropo <br/>
              Amazon AWS <br/>
            </div>
          </div>
        </div>

        <div className="twentyFive">
          <div className="contentBox">
            <div className="contentContent">
              Google APIs <br/>
              Watson APIs <br/>
            </div>
          </div>
        </div>

        <div className="twentyFive">
          <div className="contentBox">
            <div className="contentContent">
              React Native <br/>
              React-DnD <br/>
            </div>
          </div>
        </div>

      </div>
    </div>

    let personalInformation =
    <div className="two">
      <div className="twoInner">
        <div className="titleBox">
          <div className="titleContent">
            PERSONAL INFORMATION
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            I'm married and have a young daughter. <br/>
            I hold UK and Canadian passports. <br/>
            I can speak, read and write Japanese to an intermediate level. <br/>
          </div>
        </div>
      </div>
    </div>

    let quickNote =
    <div className="two">
      <div className="twoInner">
        <div className="titleBox">
          <div className="titleContent">
            QUICK NOTE
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            I currently live in Nanjing, China where I am working on Eduku. However, I am available to relocate at short notice for the right position.
          </div>
        </div>
      </div>
    </div>

    let showOrHide;
    if (this.props.showResume){
      showOrHide = "resumeBox"
    } else {
      showOrHide = "resumeBoxHide"
    }

    return (
      <div className="resumeBoxBox">
        <div className="tabBarResume" onClick={(e) => this.props.resumeClick(e)}>
          <div className="tabBarTabActiveResume" id="resumeButton">
            <div className="tabBarTabTitle" >
              {this.props.buttonText}
            </div>
          </div>
        </div>

        <div className={showOrHide} id="resume">
          <div className="letterBox">
            <div className="letter">
              <div className="letterContent">

                <div className="row">

                  {image}

                  {introduction}

                  {quickPoints}

                  {contact}

                </div>

                <div className="row">

                  {profile}

                </div>

                <div className="row">

                  {cinderhouseEduku}

                  <div className="two">
                    <div className="twoInner">

                      {codingHouse}

                      {selfStudy}

                    </div>
                  </div>

                </div>

                <div className="row">

                  {langPro}

                  {langExp}

                </div>

                <div className="row">

                  <div className="two">
                    <div className="twoInner">

                      {teaching}

                    </div>
                  </div>

                  <div className="two">
                    <div className="twoInner">

                      {teachingCont}

                      {teachingQualification}

                      {universityDegree}

                    </div>
                  </div>

                </div>


                <div className="row">

                  {personalInformation}

                  {quickNote}

                </div>

              </div>
            </div>
          </div>
          </div>

        </div>
    );
  }
}

export default Resume;
