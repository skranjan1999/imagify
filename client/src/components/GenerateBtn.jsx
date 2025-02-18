import React from 'react'
import { assets } from '../assets/assets'

function GenerateBtn() {
  return (
    <div>
      <h1>See the magic. Try now</h1>
      <button>Generate Images
        <img src={assets.star_group} alt="" />
      </button>
    </div>
  )
}

export default GenerateBtn
