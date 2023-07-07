import React from 'react'
import WhiteLogo from '../assets/WizMax_Logo_White.png'
import "../scss/Footer.scss"

function Footer() {
  return (
    <div className='footer-con'>
        <img className='white-logo' src={WhiteLogo} alt="WizMax Logo"/>
        <p className='owner'>Hanmi Micronics © All Rights Reserved.</p>
        <p className='agreement'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <br />
        <p className='agreement'>labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

    </div>
  )
}

export default Footer