import React from 'react';
// import PropTypes from 'prop-types';

class PortfolioItem extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){
    // if(this.props.data.image && this.props.data.image.length > 1){
    //   console.log('in componentDidMount');
    //   this.props.imageCarousel();
    // }
    setTimeout(()=> {
      document.getElementById('portfolioItemTitle').className ='portfolioTitleText';
      document.getElementById('youtubeBox').className ='iframe';
      document.getElementById('portfolioBodyText').className ='portfolioBodyText';
      document.getElementById('portfolioLink').className ='portfolioLink';
    }, 800);
  }

  componentDidUpdate(prevProps){
    // if(this.props.data.image && this.props.data.image.length > 1){
    //   console.log('in componentDidUpdate');
    //   this.props.imageCarousel();
    // }
    setTimeout(()=> {
      document.getElementById('portfolioItemTitle').className ='portfolioTitleText';
      document.getElementById('youtubeBox').className ='iframe';
      document.getElementById('portfolioBodyText').className ='portfolioBodyText';
      document.getElementById('portfolioLink').className ='portfolioLink';
    }, 1000);
  }

  render() {
    const { data, imageIndex } = this.props;

    const url = 'http://';
    let links;
    if (data.link){
      links = data.link.map((lnk, i) => {
        if (i === 1){
          return <div key={i}><a href={url + lnk} target="blank">github</a><br/></div>;
        }
        if (i === 2){
          return <div key={i}><a href={url + lnk} target="blank">youtube</a><br/></div>;
        }
        if (i === 3){
          return <div key={i}><a href={url + lnk} target="blank">twitter</a><br/></div>;
        }
        return <div key={i}><a href={url + lnk} target="blank">{lnk}</a><br/></div>;
      });
    } else {
      links = <div key="noLinks"><a href="#" target="blank">nothingYet</a><br/></div>;
    }


    let media;
    if(data.src){
      media = (
        <div className="portfolioYoutubeBox">
          <div className="portfolioYoutubeVideo">
            <iframe id="youtubeBox" className="iframe" src={data.src} frameBorder="0" allowFullScreen />
          </div>
        </div>);
    }
    if(data.image) {
      let image = data.image[imageIndex];
      media = (
        <div className="portfolioImageBox">
          <div className="portfolioImage">
            <img id="youtubeBox" className="iframe" src={require(`../images/${image}`)} />
          </div>
        </div>);
    }

    return (
        <div className="portfolioBox">
          <div className="portfolioTitleTextHidden" id="portfolioItemTitle">
            {data.title}
          </div>
          {media}
          <div className="portfolioBodyText" id="portfolioBodyText">
            {data.text}
          </div>
          <div className="portfolioLink" id="portfolioLink">
            {links}
          </div>
        </div>
    );
  }
}

PortfolioItem.propTypes = {
  // children: PropTypes.element
};

export default PortfolioItem;
