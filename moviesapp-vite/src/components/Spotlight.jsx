import React from 'react';

const Spotlight = ({ movies }) => {
    const randomMvIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomMvIndex];

    return (
        <div>
            {movie && (
                <div>
                    <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Movie poster"></img>
                    <div>
                        <button id="playpause" type="button" data-state="play">Play/Pause</button>
                        <p>Movie Spotlight</p>
                        <h1>{movie.title}</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Spotlight;