import React from 'react';
import Header from '/src/components/Header';
import Spotlight from '/src/components/Spotlight';
import Trending from '/src/components/Trending'
import Footer from '/src/components/Footer';
import '/src/styles/Home.css'

const Home = () => {
  
  return (
    <div className='div-home'>
      <Header /><Spotlight  /><Trending /><Footer />
    </div>
  );
};

export default Home;