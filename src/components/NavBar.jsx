import React from 'react'
import { BsFillCartFill } from "react-icons/bs"

import './NavBar.css'

import Logo from '../images/logo.png'

const NavBar = () => {

    return (
        <div className='navbar-content'>
            <div className="navbar-image-content">
                <img src={Logo} alt="Logo NeoApp X Marvel" width="200"/>
            </div>
            <div className="navbar-cart-content">
                <BsFillCartFill />
            </div>
        </div>
    );
}
 
export default NavBar;