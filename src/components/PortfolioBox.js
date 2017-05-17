import React from 'react';
// import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';

export default class PortfolioBox extends React.Component {

  constructor() {
    super();
    this.state = {
      imageIndex: 0,
      portfolioState: {},
      portfolioItems: [
        {
          title: 'EDUKU',
          image: ['eduku.png'],
          src: "https://www.youtube.com/embed/u5G2dffogDo",
          text: `I'm proud to be a co-founder and lead developer of Eduku. Eduku is a social enterprise (self-funded charity), that uses profits from the sales of learning resources to fund educational opportunities (predominantly in low-income countries) for those who don't have regular or sufficient access. We have created a platform that will allow users to interact with well designed learning resources in the form of worksheets and online games for primary-age students, as well as participate in the allocation of funds raised by / through Eduku. Check us out!`,
          link: ['eduku.org'],
        },
        {
          title: 'RICHARDMANDS.COM',
          image:['richardmandsdotcom.png'],
          src: "https://www.youtube.com/embed/S4nIfLGqd9s",
          text: 'I created this website from scratch as an attempt to develop a beautiful, full-scale, fully-responsive single-page application using react without any css-libraries.',
          link: ['www.richardmands.com','github.com/thejapanexperience/newWebsiteShell'],
        },
        {
          title: 'ENTABLE',
          image: ['Entable.png'],
          src: "https://www.youtube.com/embed/Zy6XaHpnkEg",
          text: `This application was built over a single weekend at the Lady Problems Hackathon in San Francisco and won the Cisco developers prize. It incorporates React, Express, Flux, Socket.io, MongoDB and Cisco's Tropo API to enable the creation and management of "banks" by customers around the world using a simple sms-based interface. Supporters of those banks can then go online to view updates, interact with bank members and make donations.`,
          link: ['www.entable.org', 'github.com/thejapanexperience/entable2.0', 'youtu.be/y7ehO-zgFmM', 'twitter.com/rekhapai/status/790329165341794304'],
        },
        {
          title: 'THE FAST LIFE',
          image: ['theFastLife.png'],
          src: "https://www.youtube.com/embed/ln2dLeUfRtA" ,
          text: "The Fast Life is an application that allows users to schedule, edit and view fasts, as well as keep a diary. Firebase is used to handle Google authentication. Styling was done using material-ui. The app was built with React and also incorporates Node, Express, Redux and MongoDB.",
          link: ['nameless-cove-36810.herokuapp.com', 'github.com/thejapanexperience/the-fast-life'],
        }
      ],
      tabs: [
        'tabBarTabActive',
        'tabBarTab',
        'tabBarTab',
        'tabBarTab'
      ]
    };

    this.click = this.click.bind(this);
    this.imageCarousel = this.imageCarousel.bind(this);
  }


  click(e, tabIndex){
    e.preventDefault();
    let { tabs, portfolioItems } = this.state;
    for (let i = 0; i < tabs.length; i++) {
      if (i === tabIndex){
        tabs[i] = 'tabBarTabActive';
      } else {
        tabs[i] = 'tabBarTab';
      }
    }
    document.getElementById('portfolioItemTitle').className ='portfolioTitleTextHidden';
    document.getElementById('youtubeBox').className ='iframeHidden';
    document.getElementById('portfolioBodyText').className ='portfolioBodyTextHidden';
    document.getElementById('portfolioLink').className ='portfolioLinkHidden';
    this.setState({
      tabs: tabs,
    });
    setTimeout(()=> {
      this.setState({
        portfolioState: portfolioItems[tabIndex],
      });
    }, 1000);
  }

  imageCarousel(){
    console.log('inside imageCarousel');
    let data = this.state.portfolioState;
    let images = data.image;
    let index = this.state.imageIndex;
    let length = images.length;
    let newIndex = index + 1;
    console.log('length: ', length);
    console.log('index: ', index);
    setTimeout(()=> {
      document.getElementById('youtubeBox').className ='iframeHidden';
    });
    // setTimeout(()=> {
    //   if (newIndex === length){
    //     this.setState({
    //       imageIndex: 0,
    //     });
    //   } else {
    //     this.setState({
    //       imageIndex: newIndex,
    //     });
    //   }
    // }, 10000);
  }



  render() {

    let data = this.state.portfolioState;
    let tabs = this.state.tabs;
    let portfolioItems = this.state.portfolioItems;
    let imageIndex = this.state.imageIndex;
    if(!data.title){
      data = portfolioItems[0];
    }

    const tabBarContent = tabs.map((tab, i) => {
      let title;
      title = portfolioItems[i].title;

      return(
        <div className={tabs[i]} key={i} onClick={(e) => this.click(e, i)} >
          <div className="tabBarTabTitle" onClick={(e) => this.click(e, i)}>
            {title}
          </div>
        </div>
      );
    });


    return (
      <div className="section3">
        <div className="section3Title">
          PORTFOLIO
        </div>
        <div className="tabBar">
          {tabBarContent}
        </div>
        <div className="imageCache">
          <img src={require("../images/Entable.png")} alt="Entable"/>
          <img src={require("../images/eduku.png")} alt="Eduku"/>
          <img src={require("../images/richardmandsdotcom.png")} alt="richardmands.com"/>
          <img src={require("../images/theFastLife.png")} alt="The Fast Life"/>
        </div>
        <PortfolioItem data={data} imageCarousel={() => this.imageCarousel()} imageIndex={imageIndex} />
      </div>
    );
  }
}

// PortfolioBox.propTypes = {
//   // children: PropTypes.element
// };
