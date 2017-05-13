import React from 'react';
// import PropTypes from 'prop-types';

class PortfolioItem extends React.Component {

  constructor(){
    super();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.data !== nextProps.data){
      document.getElementById('portfolioItemTitle').className ='portfolioTitleTextSmallInvisible';
      document.getElementById('youtubeBox').className ='portfolioYoutubeBoxGone';
    }
  }

  componentDidMount(){
    document.getElementById('portfolioItemTitle').className ='portfolioTitleTextSmall';
    document.getElementById('youtubeBox').className ='portfolioYoutubeBoxGone';
    setTimeout(()=> {
      document.getElementById('portfolioItemTitle').className ='portfolioTitleText';
      document.getElementById('youtubeBox').className ='portfolioYoutubeBox';
    }, 800);
  }

  componentDidUpdate(prevProps){
    if (this.props.data !== prevProps.data){
      document.getElementById('portfolioItemTitle').className ='portfolioTitleTextSmall';
      document.getElementById('youtubeBox').className ='portfolioYoutubeBoxGone';
    }
    setTimeout(()=> {
      document.getElementById('portfolioItemTitle').className ='portfolioTitleText';
      document.getElementById('youtubeBox').className ='portfolioYoutubeBox';
    }, 1000);
  }

  render() {
    const { data } = this.props;

    return (
        <div className="portfolioBox">
          <div className="portfolioTitleTextSmall" id="portfolioItemTitle">
            {data.title}
          </div>
          <div className="portfolioYoutubeBox" id="youtubeBox">
            <div className="portfolioYoutubeVideo">
              <iframe className="iframe" src={data.src} frameBorder="0" allowFullScreen />
            </div>
          </div>
          <div className="portfolioBodyText">
            {data.text}
          </div>
        </div>
    );
  }
}

PortfolioItem.propTypes = {
  // children: PropTypes.element
};

export default PortfolioItem;
