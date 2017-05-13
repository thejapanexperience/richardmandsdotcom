import React from 'react';
// import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';

export default class PortfolioBox extends React.Component {

  constructor() {
    super();
    this.state = {
      portfolioState: {},
      portfolioItems: [
        {
          title: 'EDUKU',
          src: "https://www.youtube.com/embed/u5G2dffogDo",
          text: 'Eduku something something somethingLorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore, quae hic repellendus consequatur minima dicta veniam distinctio id iure minus! Consequatur quibusdam veniam suscipit ad voluptatum a corporis assumenda.'
        },
        {
          title: 'RICHARDMANDS.COM',
          src: "https://www.youtube.com/embed/S4nIfLGqd9s",
          text: 'richardmands.com something something Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore, quae hic repellendus consequatur minima dicta veniam distinctio id iure minus! Consequatur quibusdam veniam suscipit ad voluptatum a corporis assumenda.'
        },
        {
          title: 'ENTABLE',
          src: "https://www.youtube.com/embed/Zy6XaHpnkEg",
          text: 'Entable something something Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore, quae hic repellendus consequatur minima dicta veniam distinctio id iure minus! Consequatur quibusdam veniam suscipit ad voluptatum a corporis assumenda.'
        },
        {
          title: 'THE FAST LIFE',
          src: "https://www.youtube.com/embed/ln2dLeUfRtA" ,
          text: 'The Fast Life something something Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore, quae hic repellendus consequatur minima dicta veniam distinctio id iure minus! Consequatur quibusdam veniam suscipit ad voluptatum a corporis assumenda.'
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
    this.setState({
      tabs: tabs,
      portfolioState: portfolioItems[tabIndex]
    });
  }


  render() {

    let data = this.state.portfolioState;
    let tabs = this.state.tabs;
    let portfolioItems = this.state.portfolioItems;
    if(!data.title){
      data = portfolioItems[0];
    }

    const tabBarContent = tabs.map((tab, i) => {
      let title;
      let activeState;
      title = portfolioItems[i].title;

      return(
        <div className={tabs[i]} key={i} onClick={(e) => this.click(e, i)} >
          <div className="tabBarTabTitle">
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
        <PortfolioItem data={data} />
      </div>
    );
  }
}

// PortfolioBox.propTypes = {
//   // children: PropTypes.element
// };
