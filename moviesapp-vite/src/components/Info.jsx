import React from 'react';
import '/src/styles/Info.css';

const Info = () => {

  return (
    <div className="div-info">
      <div className='div-title-pop-info'>
        <h1 className='h1-title-info'>Star Wars: The Last Jedi</h1>
        <p className='p-pop-info'>4K</p>
      </div>
      <div className='div-dur-vote-info'>
        <p className='p-dur-info'>🕒 152 minutes</p>
        <p className='p-vote-info'>⭐ 7.0 (tMDb)</p>
      </div>
        <div className='div-release-info'>
          <h2 className='h2-release-info'>Release date</h2>
          <p className='p-release-info'>December 9, 2017</p>
        </div>
        <div className='div-genre-info'>
          <h2 className='h2-genre-info'>Genre</h2>
          <p className='p-genre-info'>Action</p>
          <p className='p-genre-info'>Sc-Fi</p>
        </div>
        <div className='div-synopsis-info'>
          <h2 className='h2-synopsis-info'>Synopsis</h2>
          <p className='p-synopsis-info'>Rey (Daisy Ridley) finally manages to find the legendary Jedi knight, Luke Skywalker (Mark Hamill) on an island with a magical aura. The heroes of The Force Awakens including Leia, Finn <span>Read more...</span></p>
        </div>
        <div className='div-related-info'>
          <h2 className='h2-related-info'>Related movies</h2>
        </div>
    </div>
  );
};

export default Info;