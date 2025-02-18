import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'


function BuyCredit() {

  const {user} = useContext(AppContext)

  
  return (
    <div>
      <button>
        Our Plans
      </button>
      <h1>Choose the plan</h1>

      <div>
        {plans.map((item, index)=> (
          <div key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p>{item.id}</p>
            <p>{item.desc}</p>
            <p>
              <span> ${item.price} </span>/ {item.credits} credits</p>
            <button>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
