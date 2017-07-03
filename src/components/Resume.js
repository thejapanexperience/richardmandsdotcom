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
        <div className="resumeImageBox">
          <img className="img" src={require("../images/RichardBWSquare900.jpg")} alt=""/>
          {/* <div className="resumeImage"/> */}
      </div>
      </div>
    </div>

    let introduction =
    <div className="four">
      <div className="fourInner">
        <div className="titleBox">
          <div className="titleContent">
            RICHARD MANDS
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            Full-stack javascript developer.
          </div>
          <div className="contentContent">
            A quick study who has learned how to learn, I adapt easily to new technologies and bring with me a real passion for what I do, a fierce work-ethic and an honest desire to leave the world a better place each day.
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
            - 3 yrs experience coding, designing & marketing at <a target="_blank" href='http://www.cinderhouse.com.au/'>Cinderhouse Creative</a><br/>
            - Cofounder/lead developer of <a target="_blank" href='http://www.eduku.org/'>Eduku</a><br/>
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
            Portfolio: <a target="_blank" href="http://www.richardmands.com">richardmands.com</a><br/>
            Phone: +44 07507 881794<br/>
            Email: richard@eduku.org<br/>
            <a target="_blank" href="https://www.linkedin.com/in/richardmands">linkedin.com/in/richardmands</a><br/>
            <a target="_blank" href="https://github.com/thejapanexperience">github.com/thejapanexperience</a><br/>
            <a target="_blank" href="https://twitter.com/RichardMands">twitter.com/RichardMands</a><br/>
            <a target="_blank" href="https://www.facebook.com/richard.mands">facebook.com/richard.mands</a>
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
            - Co-Founder / Visual Director / Developer at Cinderhouse Creative.
          </div>
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
            - Won Cisco’s 1st place prize at AngelHack’s Lady Problems hackathon in San Francisco for Entable, an sms-based, Tropo-powered table-banking system.
          </div>
          <div className="contentContent">
            - Co-founder of 3 social enterprise case-studies that funded business-development competitions on <a href="https://herox.com/domogo" target="_blank">HeroX</a> for <a href="http://www.kitointl.org/" target="_blank">Kito International</a> graduates in Kenya.
          </div>
          <div className="contentContent">
            - Professional level photography, videography and video editing skill. Have worked on projects in Australia, China and the UK
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

    let cinderhouse =
    <div className="two">
      <div className="twoInner">

        <div className="titleBox">
          <div className="titleContent">
            <a target="_blank" href='http://www.cinderhouse.com.au/'>CINDERHOUSE CREATIVE</a> | Oct ‘14 - Present
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            Co-Founder / Visual Director / Developer | Nanjing, China

          </div>
          <div className="contentContent">
            Since co-founding Cinderhouse Creative, we have delivered projects for clients such as Officemax, Unilever, Sinoma, JHerro and SkyData, among others.

          </div>
          <div className="contentContent">
            Additionally, through Cinderhouse Creative, I am the co-founder of 3 social enterprise (self-funded charity) case-studies: <a href="http://eduku.org/" target="_blank">Eduku</a>, <a href="http://stockdisrupt.com/" target="_blank">Stock Disrupt</a> and <a href="http://domogo.co/" target="_blank">Domogo</a> that have featured in several publications including the BBC.
          </div>

        </div>
      </div>
    </div>

    let eduku =
    <div className="two">
      <div className="twoInner">

        <div className="titleBox">
          <div className="titleContent">
            <a href="http://eduku.org/" target="_blank">EDUKU</a> | Aug ’15 - Present
          </div>
        </div>
        <div className="contentBox">
          <div className="contentContent">
            Co-Founder / Lead Developer | Nanjing, China
          </div>
          <div className="contentContent">
            <a href="http://eduku.org/" target="_blank">Eduku</a> is a Cinderhouse Creative social enterprise, that aims to raise funds for those lacking educational opportunities in low-income countries via an online learning platform.

          </div>
          <div className="contentContent">
            The platform will allow users to interact with online learning resources as well as participate in the allocation of profits towards social outcomes.
          </div>

        </div>
      </div>
    </div>


    // let selfStudy =
    // <div>
    //   <div className="titleBox">
    //     <div className="titleContent">
    //       SELF-STUDY
    //       | Dec '16 - Present
    //     </div>
    //   </div>
    //   <div className="contentBox">
    //     <div className="contentContent">
    //       I have completed the following online courses:
    //     </div>
    //     <div className="contentContent">
    //       Pluralsight |
    //       <a href="https://app.pluralsight.com/library/courses/better-css/table-of-contents" target="blank"> A Better CSS: LESS and SASS</a> |
    //       <a href="https://app.pluralsight.com/library/courses/css3-in-depth/table-of-contents" target="blank"> CSS3 In-Depth</a> |
    //       <a href="https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents" target="blank"> Building Applications with React and Flux</a> |
    //       <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents" target="blank"> Building Applications with React and Redux in ES6</a>
    //     </div>
    //     <div className="contentContent">
    //       Udacity |
    //       <a href="https://classroom.udacity.com/courses/ud893" target="blank"> Responsive Design Fundamentals</a> |
    //       <a href="https://classroom.udacity.com/courses/ud882" target="blank"> Responsive Images</a>
    //     </div>
    //   </div>
    // </div>

    let teaching =
    <div>
      <div className="titleBox">
        <div className="titleContent">
          <a href="https://bsn.org.cn/" target="_blank">BRITISH SCHOOL OF NANJING</a> | Apr '12 - Jul '16
        </div>
      </div>
      <div className="contentBox">
        <div className="contentContent">
          Science & ICT Teacher / Assessment Coordinator | Nanjing, China

        </div>
        <div className="contentContent">
          Taught science and ICT to students aged 10-18.
        </div>
        <div className="contentContent">
          Developed and implemented a google-drive based real-time assessment and feedback system for students and teachers.
        </div>
        <div className="contentContent">
          Won the technology development prize from the <a href="https://www.britishschools.co.uk/" target="_blank">British Schools Foundation</a>.
        </div>
        <div className="contentContent">
          Developed training curricula and led inset for  staff with the goal of improving IT integration.
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
          OTHER TEACHING | Apr '04 - Mar '12
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
            I currently live in Whitley Bay, England where I am working on projects for Cinderhouse Creative, with a focus on Eduku. However, I am available to relocate at short notice for the right position.
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

                  {cinderhouse}

                  {eduku}

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
