import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-container'>
        <Link to='/'>
                <img 
                    src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" 
                    alt=""
                    className='logo'
                    />
            </Link>
        </div>
        <div className='nav-links-container'>
            <ul>
                <h3>
                    <Link to='/contact' className='link'>Contact</Link>
                </h3>
                <h3>
                    <Link to='/register' className='link'>Register</Link>
                </h3>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;