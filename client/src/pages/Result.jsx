import React, { useState } from "react";
import { assets } from "../assets/assets";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) =>{


  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <div>
          <img src={image} alt="" />
          <span />
        </div>
        <p className={!loading ? "hiden" : ""}>Loading....</p>
      </div>

      {!isImageLoaded && 
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
          />
          <button type='submit'>Generate</button>
        </div>
      }

      {isImageLoaded &&
        <div>
          <p onClick={()=>{setIsImageLoaded(false)}}>Generate Another</p>
          <a href={image} download >Download</a>

        </div>
        
        }
    </form>
  );
}

export default Result;
