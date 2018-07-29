import React from 'react';
import { Scroll } from '../common';
import icon from '../static/down-chevron.svg';

const onIconClick = () => new Scroll('content-container');

const Banner = () => <div className="banner--bg-img" alt="Space Background Image">
  <div className="banner--tag">Space Savvy</div>
  <div className="banner--title">Discover Space Missions</div>
  <div className="banner--icon">
    <img src={icon} onClick={onIconClick} alt="Icon"/>
  </div>
</div>

export default Banner;