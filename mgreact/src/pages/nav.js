import React from 'react'
import './nav.css'
import Logo from './images/CT_logo.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <a  href="#" className="logo"><img src={Logo} alt='logo' style={{width:'200px'}}></img></a>
            <ul className="nav-links">
                <li><a href="/">About Us</a> </li>
                <li><a href="/">Equipment</a> </li>
                <li><a href="/">Permit Classes</a> </li>
                <li><a href="/about"></a></li>

            </ul>
        </div>
    );
};
export default Navbar; 