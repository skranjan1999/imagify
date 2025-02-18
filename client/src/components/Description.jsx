import React from "react";
import { assets } from "../assets/assets";
import './Description.css'

function Description() {
  return (
    <div className="des-container">
      <div className="des-heading">
        Create AI Images
      </div>
      <div>
        Turn your Imagination into Visual
      </div>
      <div className="des-container-inside">
        <img className='img' src={assets.sample_img_1} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quae qui repellendus amet totam minus quos sit fugiat molestiae
          distinctio, enim labore dolore quasi possimus veniam numquam id
          laboriosam maxime dignissimos officia, ducimus doloribus voluptas! In
          assumenda, similique soluta maxime architecto adipisci consequuntur ad
          delectus aut et quia excepturi accusamus quaerat quibusdam repellat.
          Optio facere nisi nesciunt architecto, voluptas soluta! Atque magnam
          rerum exercitationem earum laborum quos maxime soluta pariatur dolore
          quia, sunt iste fugiat perspiciatis consequatur provident incidunt
          fuga at, ea, consequuntur repudiandae repellendus? Voluptate nam iusto
         
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Description;
