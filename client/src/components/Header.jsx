import React, { useContext } from "react";
import "./Header.css";
import { assets } from "../assets/assets";
import { motion } from "motion/react"
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Header() {

  const { user, setShowLogin } = useContext( AppContext );

  const navigate = useNavigate()

  const onClickHandler = () => {
    if ( user ) {
      navigate('/result')
    }
    else{
      setShowLogin(true)
    }

  }
  return (
    <motion.div 
    className="header-container"
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{ once: true}}
    >
      <motion.div className="text-to-image"
      initial={{opacity:0.2, y:-20}}
      animate={{opacity:1, y: 0 }}
      transition={{ delay: 0.2, duration : 0.8 }}
      >
        <p>Best Text to Image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1 className="heading"
      initial={{opacity:0 }}
      animate={{ opacity : 1 }}
      transition={{ delay : 0.4, duration: 2 }}
      >
        Turn text to <span className="">image</span>, in seconds.
      </motion.h1>
      <p>
        Unleash your creativity with AI, Turn your imagination to visual art in
        seconds-just type, and watch the magic happen.
      </p>

      <button onClick={onClickHandler} className="generate-btn">
        <p>Generate Image</p>
        <img className='generate-icon' src={assets.star_group} alt="" />
      </button>


      <div className="img-array">
        {Array(6).fill('').map((item, index) =>(
          <img src={assets.sample_img_1} alt="" key={index} width={70} />
        ) )}
      </div>

      <p>Generated image from Imagify</p>
    </motion.div>
  );
}

export default Header;
