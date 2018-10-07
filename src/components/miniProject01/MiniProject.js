import React from 'react';
// import {Link} from 'react-router';
import AllPurposeApp from './AllPurposeApp';

class MiniProject extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('react demo');
    const { click } = this.props;

    return (
      <div className="reactBoxBoxHide" id="reactDemo1">
        <div className="reactBoxHide" id="reactDemo11">
          <div className="reactTitle">
            <div className="reactTitleText">
              Displaying External API data with React
            </div>
          </div>
          <div className="reactText">
            <div className="reactTextText">
              | React and Flexbox used for presentation. <br />| API data pulled
              from <a href="https://randomuser.me/">randomuser.me</a>.
            </div>
          </div>
          <div className="iconsAndApp">
            <div className="iconBoxOuterPortfolio">
              <div className="iconBoxPortfolio">
                <div className="iconBoxImageBoxPortfolio">
                  <img
                    className="iconBoxImage"
                    src={require('../../images/techIcons300/Javascript.png')}
                    alt="Javascript"
                  />
                </div>
                <div className="iconBoxImageBoxPortfolio">
                  <img
                    className="iconBoxImage"
                    src={require('../../images/techIcons300/HTML5CSS3.png')}
                    alt="HTMLCSS"
                  />
                </div>
                <div className="iconBoxImageBoxPortfolio">
                  <img
                    className="iconBoxImage"
                    src={require('../../images/techIcons300/Sass.png')}
                    alt="Sass"
                  />
                </div>
                <div className="iconBoxImageBoxPortfolio">
                  <img
                    className="iconBoxImage"
                    src={require('../../images/techIcons300/React.png')}
                    alt="React"
                  />
                </div>
                {/* <div className="iconBoxImageBoxPortfolio">
                  <img
                    className="iconBoxImage"
                    src={require('../../images/techIcons300/Express.png')}
                    alt="Express"
                  />
                </div>
                <div className="iconBoxImageBoxPortfolio">
                  <img
                    className="iconBoxImage"
                    src={require('../../images/techIcons300/Node.png')}
                    alt="Node"
                  />
                </div>
                <div className="iconBoxImageBoxPortfolio">
                  <img
                    className="iconBoxImage"
                    src={require('../../images/techIcons300/webpack.png')}
                    alt="Webpack"
                  />
                </div> */}
              </div>
            </div>
            <AllPurposeApp click={click} />
          </div>
        </div>
      </div>
    );
  }
}

export default MiniProject;
