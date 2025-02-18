import React from 'react'
import './Steps.css'
import { stepsData } from '../assets/assets'

function Steps() {
  return (
    <div className='steps-container'>
      <div className='steps-heading'>How it Works</div>
      <div>Transform words into stunning Images</div>
      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item, index)=>
        <div key={index} className='steps-des'>
          <img src={item.icon} alt="" />
          <div>
            <h2 className='text-xl font-medium'>{item.title}</h2>
            <p className='text-gray-500'>{item.description}</p>
          </div>

        </div>
        )}
      </div>
      
    </div>
  )
}

export default Steps
