import React from 'react';
import { NavLink } from 'react-router-dom';
import '/src/styles/Footer.css';

const Footer = () => {
    
    return (
        <footer className='footer-section'>
            <ul className='list-nav'>
                <NavLink to ="/" className="nav-link">
                    <li className='home-link'><img src='/src/assets/logoHome.svg'></img></li>
                </NavLink>
                <NavLink to="/search" className="nav_link">
                    <li className='search-link'><img src='/src/assets/logoSearch.svg'></img></li>
                </NavLink>
                <NavLink to="/login" className="nav_link">
                    <li className='login-link'><img src='/src/assets/logoUser.svg'></img></li>
                </NavLink>
            </ul>
        </footer>
    );
};

export default Footer;
