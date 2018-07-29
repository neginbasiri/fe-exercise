import React from 'react';
import { Scroll } from '../common';
import icon from '../static/down-chevron.svg';
import bannerImage from '../static/space-photo.jpeg';

const onIconClick = () => new Scroll();

const Banner = () => <div className="banner" alt="Space Background Image">
  <img className="banner--image" src={bannerImage} alt="Banner"/>
  <div className="banner--tag">Space Savvy</div>
  <div className="banner--title">Discover Space Missions</div>
  <div className="banner--icon">
    <img src={icon} onClick={onIconClick} alt="Icon"/>
  </div>
</div>

export default Banner;