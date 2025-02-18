import React from "react";
import "./Header.css";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="header-container">
      <div className="text-to-image">
        <p>Best Text to Image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className="heading">
        Turn text to <span className="">image</span>, in seconds.
      </h1>
      <p>
        Unleash your creativity with AI, Turn your imagination to visual art in
        seconds-just type, and watch the magic happen.
      </p>

      <button onclick={()=>{generateImage}} className="generate-btn">
        <p>Generate Image</p>
        <img className='generate-icon' src={assets.star_group} alt="" />
      </button>


      <div className="img-array">
        {Array(6).fill('').map((item, index) =>(
          <img src={assets.sample_img_1} alt="" key={index} width={70} />
        ) )}
      </div>

      <p>Generated image from Imagify</p>
    </div>
  );
}

export default Header;
