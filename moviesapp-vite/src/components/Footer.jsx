import React from 'react';
import { NavLink } from 'react-router-dom';
import '/src/styles/Footer.css';

const Footer = () => {
    
    return (
        <footer className='footer-section'>
            <ul className='list-nav'>
                <NavLink to ="/" className="nav-link">
                    <li className='home-link'><img className='img-home' src='/src/assets/logoHome.svg'></img></li>
                </NavLink>
                <NavLink to="/Discover" className="nav_link">
                    <li className='search-link'><img className='img-search' src='/src/assets/logoSearch.svg'></img></li>
                </NavLink>
                <NavLink to="/Login" className="nav_link">
                    <li className='login-link'><img className='img-login' src='/src/assets/logoUser.svg'></img></li>
                </NavLink>
            </ul>
        </footer>
    );
};

export default Footer;