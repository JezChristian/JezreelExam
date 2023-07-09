import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Logo from "../assets/WizMax_Logo.png"
import {AiOutlineSearch, AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import "../scss/Nav.scss"

function Nav() {

  const [toggleNav,setToggleNav] = useState(false)

  const toggleNavBar = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <>
    <nav className='navbar'>
      <div className='logo-menu'>
        <div className='logo-con'>
            <img src={Logo}/>
        </div>

        <div className='Navigation-Bar' >
         <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/Products'>Products</NavLink></li>
              <li><NavLink to='/Support'>Support</NavLink></li>
              <li><NavLink to='/Shop'>Shop</NavLink></li>
              <li><NavLink to='/Contact'>Contact</NavLink></li>
              <span><AiOutlineSearch/></span>
              
          </ul>
        </div> 
        </div>

        <div id={toggleNav ? 'open' : 'close'} className='Side-Nav' >
        <div className='side-menu' onClick={toggleNavBar}><AiOutlineMenu/></div>

            <div className='Side-Navigation-Bar' >
            <ul>
                  <li><NavLink to='/'>Home</NavLink></li>
                  <li><NavLink to='/Products'>Products</NavLink></li>
                  <li><NavLink to='/Support'>Support</NavLink></li>
                  <li><NavLink to='/Shop'>Shop</NavLink></li>
                  <li><NavLink to='/Contact'>Contact</NavLink></li>
                  <span><AiOutlineSearch/></span>
                  
              </ul>
            </div> 
        </div>
        <div className='side-menu' onClick={toggleNavBar}><AiOutlineMenu/></div>
    </nav>
    </>
  )
}

export default Nav