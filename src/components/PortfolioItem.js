import React from 'react';
// import PropTypes from 'prop-types';

class PortfolioItem extends React.Component {

  constructor(){
    super();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.data !== nextProps.data){
      document.getElementById('portfolioItemTitle').className ='portfolioTitleTextSmallInvisible';
      document.getElementById('youtubeBox').className ='iframeHidden';
      document.getElementById('portfolioBodyText').className ='portfolioBodyTextGone';
      document.getElementById('portfolioLink').className ='portfolioLinkGone';
    }
  }

  componentDidMount(){
    document.getElementById('portfolioItemTitle').className ='portfolioTitleTextSmall';
    document.getElementById('youtubeBox').className ='iframeHidden';
    document.getElementById('portfolioBodyText').className ='portfolioBodyTextGone';
    document.getElementById('portfolioLink').className ='portfolioLinkGone';
    setTimeout(()=> {
      document.getElementById('portfolioItemTitle').className ='portfolioTitleText';
      document.getElementById('youtubeBox').className ='iframe';
      document.getElementById('portfolioBodyText').className ='portfolioBodyText';
      document.getElementById('portfolioLink').className ='portfolioLink';
    }, 800);
  }

  componentDidUpdate(prevProps){
    if (this.props.data !== prevProps.data){
      document.getElementById('portfolioItemTitle').className ='portfolioTitleTextSmall';
      document.getElementById('youtubeBox').className ='iframeHidden';
      document.getElementById('portfolioBodyText').className ='portfolioBodyTextGone';
      document.getElementById('portfolioLink').className ='portfolioLinkGone';
    }
    setTimeout(()=> {
      document.getElementById('portfolioItemTitle').className ='portfolioTitleText';
      document.getElementById('youtubeBox').className ='iframe';
      document.getElementById('portfolioBodyText').className ='portfolioBodyText';
      document.getElementById('portfolioLink').className ='portfolioLink';
    }, 1000);
  }

  render() {
    const { data } = this.props;
    const url = 'http://';

    return (
        <div className="portfolioBox">
          <div className="portfolioTitleTextSmall" id="portfolioItemTitle">
            {data.title}
          </div>
          <div className="portfolioYoutubeBox">
            <div className="portfolioYoutubeVideo">
              <iframe id="youtubeBox" className="iframe" src={data.src} frameBorder="0" allowFullScreen />
            </div>
          </div>
          <div className="portfolioBodyText" id="portfolioBodyText">
            {data.text}
          </div>
          <div className="portfolioLink" id="portfolioLink">
            <a href={url + data.link} target="blank">{data.link}</a>
          </div>
        </div>
    );
  }
}

PortfolioItem.propTypes = {
  // children: PropTypes.element
};

export default PortfolioItem;
