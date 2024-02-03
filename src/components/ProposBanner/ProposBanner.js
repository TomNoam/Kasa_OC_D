import React from 'react';
import "./ProposBanner.scss";
import "./ProposBannerResponsive.scss";

const ProposBanner = () => {
  return (
    <div className="ProposBanner">
        <img src={process.env.PUBLIC_URL + "/images/propos_background.png"} alt="propos_background"/>
        {/* <div className="BannerHomeText">Chez vous, partout et ailleurs</div>                 */}
    </div>
  )
}

export default ProposBanner