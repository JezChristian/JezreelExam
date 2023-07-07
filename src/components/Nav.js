import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from "../assets/WizMax_Logo.png"
import {AiOutlineSearch} from "react-icons/ai"
import "../scss/Nav.scss"

function Nav() {
  return (
    <nav>
        <div className='logo-con'>
            <img src={Logo}/>
        </div>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Products'>Products</NavLink></li>
            <li><NavLink to='/Support'>Support</NavLink></li>
            <li><NavLink to='/Shop'>Shop</NavLink></li>
            <li><NavLink to='/Contact'>Contact</NavLink></li>
            <span><AiOutlineSearch></AiOutlineSearch></span>
        </ul>
    </nav>
  )
}

export default Nav