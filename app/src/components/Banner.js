import React from 'react';
import bannerImage from '../static/space-photo.jpeg';

const style = {
  backgroundImage: bannerImage
}

const Banner = () => <div className="banner--bg-img" style={style} alt="Space Background Image">
  <div className="banner--tag">Space Savvy</div>
  <div className="banner--title">Discover Space Missions</div>
  <div className="banner--icon">icon</div>
</div>

export default Banner;