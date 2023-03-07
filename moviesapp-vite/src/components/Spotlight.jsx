import React, { useState, useEffect } from 'react';
import '/src/styles/Spotlight.css';

const apiKey = '03249b4940f77c24ab0611c35cc8a22f';

const Spotlight = () => {
    const [videoKey, setvideoKey] = useState('');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

            fetch(`https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${apiKey}`)
            .then(response => response.json())
            .then(videoData => {

                const videoKey = videoData.results.find(result => result.type === 'Trailer')?.key;
                setvideoKey(videoKey);
            });
        });
    }, []);

    return (
        <div>
        {videoKey && (
            <iframe className='video-spotlight'
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        )}
        </div>
    );
    };

export default Spotlight;

/*import React, { useState, useEffect } from 'react';


const Spotlight = () => {
  const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Récupérer un film aléatoire
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        const randomMvIndex = Math.floor(Math.random() * data.results.length);
        const randomMovie = data.results[randomMvIndex];
        setMovie(randomMovie);

        // Récupérer l'identifiant de la bande-annonce
        fetch(`https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${apiKey}&language=en-US`)
          .then(response => response.json())

import React, { useState, useEffect } from 'react';
import '/src/styles/Spotlight.css';

const Spotlight = () => {
    const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US')
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }, []);

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

export default Spotlight;*/