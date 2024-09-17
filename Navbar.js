import React, { Component } from 'react';
import '../Css/NavbarCss.css';
import icon from '../Image/Icon.webp'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div id='navbar-main'>
                <ul className='navbar-ul'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='AboutUs'><li>About Us</li></Link>
                    <Link to='Contact'><li>Contact</li></Link>
                    <li>Login</li>
                    <Link to='Images'><li><img className='navbar-icon' src={icon}></img></li></Link>
                </ul> 
            </div> 
        )
    }
}

export default Navbar;
