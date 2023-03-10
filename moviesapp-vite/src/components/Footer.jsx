import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '/src/styles/Footer.scss';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className='footer-section'>
      <ul className='list-nav'>
        <NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          <li className='home-link'><img className='img-home' src='/src/assets/logoHome.svg' alt='Home'></img></li>
        </NavLink>
        <NavLink to="/Discover" className={`nav-link ${location.pathname === '/Discover' ? 'active' : ''}`}>
          <li className='search-link'><img className='img-search' src='/src/assets/logoSearch.svg' alt='Discover'></img></li>
        </NavLink>
        <NavLink to="/Login" className={`nav-link ${location.pathname === '/Login' ? 'active' : ''}`}>
          <li className='login-link'><img className='img-login' src='/src/assets/logoUser.svg' alt='Login'></img></li>
        </NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
