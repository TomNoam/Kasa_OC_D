import React from 'react';
import "./HomeBanner.scss";
import "./HomeBannerResponsive.scss";

const HomeBanner = () => {
  return (
    <div className="HomeBanner">
        <img src={process.env.PUBLIC_URL + "/images/home_background.png"} alt="home_background"/>
        <div className="BannerHomeText">Chez vous, partout et ailleurs</div>                
    </div>
  )
}

export default HomeBanner