import React from 'react';
import Header from '/src/components/Header';
import Info from '/src/components/Info';
import Footer from '/src/components/Footer';
import '/src/styles/Details.css';

const Details = () => {
    return (
        <div className='div-details'>
      <Header /><Info /><Footer />
        </div>
    );
};

export default Details;