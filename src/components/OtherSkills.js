import React from 'react';

export default class OtherSkills extends React.Component {

  constructor(){
    super();
    this.state = {
      showResume: false,
      buttonText1: 'Show résumé?',
      buttonText2: 'Hide résumé?',
      buttonText: 'Show résumé?',
    };
  }

  render() {
    return(
      <div className="section7Whole">
      <div className="section7HeaderBox">
        <div className="section7Header">
          <div className="section7Title">OTHER SKILLS</div>
        </div>
      </div>

      <div className="section7Box1">
        <div className="section7">
          <div className="section7Title2">EDUCATION & TRAINING</div>
          <div className="section7Text">
            I'm a UK qualified secondary science teacher with a decade of classroom teaching experience. In that
            time, as well as day-to-day teaching, I have developed original curricula, managed student assessment
            data, introduced Google Drive into student assessment and feedback at my school, won a technology
            development prize from my schools group, led teacher training sessions (mostly based around usage of
            technology) and been a leader in developing social enterprise / charitable giving. <br />
            <br />
            These are all experiences that have helped me develop the ability to understand and communicate new
            technologies in a clear and effective way.
          </div>
        </div>
      </div>

      <div className="section7Box2">
        <div className="section72">
          <div className="section7Title2">PHOTOGRAPHY</div>
          <div className="section7Text">
            I'm a passionate and experienced photographer, having shot a wide variety of jobs ranging in style
            from in-studio product shots, to on location portraiture and events. I am proficient with Photoshop,
            Lightroom and the whole suite of available plug-ins that expand Adobe's software.<br />
            <br />
            I own a range of professional cameras and lenses and would love to use my photography skills to
            support any organisation I work for. <br />
          </div>
          <div className="section7ImageBox">
            <img
              className="section7Image"
              src={require('../images/richardCollageWide02.jpg')}
              alt="richardmandsphotography"
            />
          </div>
        </div>
      </div>

      <div className="section7Box1">
        <div className="section7">
          <div className="section7Title2">VIDEOGRAPHY & EDITING</div>
          {/* <div className="section7Title2">
          AND EDITING
        </div> */}
          <div className="section7Text">
            I have experience shooting a variety of projects that range from in-studio promos and product shots to
            on-location events and even 360 video (using a multi-camera GoPro rig). I shoot with professional
            standard cameras (Panasonic GH4) and lenses in 4K. <br />
            <br />
            I am proficient with Adobe Premiere Pro, After-Effects (mostly text animations) and Audition. I also
            have experience with recording high quality audio using shotgun, lavalier and traditional dynamic
            microphones recorded onto a variety of Zoom external recorders (H1, H5). <br />
            <br />
            As with my photography skills, it would be great to utilise my videography experience (if possible)
            alongside a role as a developer.
          </div>
          <div className="section7YoutubeBoxBox">
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/U_icV5LqHKA"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/erew-BmkB6o"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/cdvg_jTrjlg"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/De1DiZgcEy0"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/6zsAoQC8RcQ"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="section7YoutubeBox">
              <div className="portfolioYoutubeBox">
                <div className="portfolioYoutubeVideo">
                  <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/1d0gc4Ux6Rc"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}
