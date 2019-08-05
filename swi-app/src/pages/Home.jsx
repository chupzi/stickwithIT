import React from 'react';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img className='home-carousel' src={`https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F57920934%2F254755276702%2F1%2Foriginal.jpg?w=1000&auto=compress&rect=0%2C901%2C3598%2C1799&s=033e88200731a8e890feceb8be996dd9`} />
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img className='home-carousel' src={`http://www.fredhutch.org/content/dam/www/about-us/education/girls-who-code/Gal3-Final-MV0A8806.jpg`} />
          <div className="text">Caption Two</div>
        </div>
        <div className="mySlides">
        <div className="numbertext">3 / 3</div>
        <img src="" />
        <div className="text">Caption Three</div>
      </div>
        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a className="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
  );
}
Home.propTypes = {

}
Home.defaultProps = {

}
export default Home;