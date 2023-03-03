import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <ul className='list-nav'>
                <NavLink to ="/" className="nav-link">
                    <li className='home-link'></li>
                </NavLink>
                <NavLink to="/search" className="nav_link">
                    <li className='search-link'></li>
                </NavLink>
                <NavLink to="/login" className="nav_link">
                    <li className='login-link'></li>
                </NavLink>
            </ul>
        </footer>
    );
};

export default Footer;