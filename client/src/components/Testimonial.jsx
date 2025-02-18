import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import './Testimonial.css'

function Testimonial() {
  return (
    <div className='test-container'>
      
      <h1 className='test-heading'>Customer Testimonials</h1>
      <p>What our Users are saying</p>

      <div>
        {testimonialsData.map((testimonial, index)=>(
            <div key={index}>
                <div>
                    <img src={testimonial.image} alt="" />
                    <h2>{testimonial.name}</h2>
                    <p>{testimonial.role}</p>
                    <div>
                        {Array(testimonial.stars).fill().map((item, index)=>(
                            <img key={index} src={assets.rating_star} alt="" />
                        ))}
                    </div>
                    <p>{testimonial.text}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
