import React from 'react';
import '/src/styles/Spotlight.css';

const Spotlight = ({ movies }) => {
    const randomMvIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomMvIndex];

    return (
        <div className='div-spotlight'>
            {movie && (
                <div className='wrapper-spotlight'>
                    <video className='video-spotlight' src={'https://www.youtube.com/watch?v=' + movie.key} controls></video>                    
                    <div className='div-play'>
                        <img className='img-play' src="/src/assets/Play.svg" alt="Play" />
                        <p className='p-play'>
                            <h1 className='h1-play'>Movie Spotlight</h1>
                            <h2 className='h2-play'>{movie.title}</h2>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Spotlight;