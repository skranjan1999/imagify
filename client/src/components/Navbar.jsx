import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

function Navbar() {
    const {user} = useContext(AppContext)

    const navigate = useNavigate()


  return (
    <div className='nav-container'>

        <Link to='/'>
        <img src={assets.logo} alt="" className='nav-logo'/>
        </Link>

        <div >
            {
                user ?
                <div className='nav-right'>
                    <button className='credit-left' onClick={()=>navigate('/buy')}>
                        <img className='credit-img' src={assets.credit_star} alt="" />
                        <p>Credit Left: 50</p>
                    </button>
                    <p>Hi Saurabh</p>
                    <div>
                        <img  className='profile-icon' src={assets.profile_icon} alt="" />
                        <div className='logout'>
                            <ul>
                                <li>Log out</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className='nav-right'>
                    <p className='pricing' onClick={()=>navigate('/buy')}>Pricing</p>
                    <p className='login'> Login</p>
                </div>
            }
            
            
        </div>
      
    </div>
  )
}

export default Navbar
