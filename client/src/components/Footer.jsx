import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="main-container">
      <img src={assets.logo} alt="" width={150} />
      <p>Copyright @Imagify | All rights are reserved</p>
      <div>
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.instagram_icon} alt=""/>
        <img src={assets.twitter_icon} alt=""/>
      </div>
    </div>
  );
}

export default Footer;
