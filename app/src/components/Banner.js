import React from 'react';
import icon from '../static/down-chevron.svg';

// const style = {
//   backgroundImage: bannerImage
// }

const Banner = () => <div className="banner--bg-img" alt="Space Background Image">
 {/* <img src={bannerImage} className="dd-logo" alt="" /> */}
  <div className="banner--tag">Space Savvy</div>
  <div className="banner--title">Discover Space Missions</div>
  <div className="banner--icon">
    <img src={icon}/>
  </div>
</div>

export default Banner;