import React, { useState, useEffect } from 'react';
import '/src/styles/Info.css';

const apiKey = '03249b4940f77c24ab0611c35cc8a22f';

const Info = ({ movieId }) => {
  const [movieData, setMovieData] = useState({});
  const [videoKey, setVideoKey] = useState('');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovieData(data);
        if (data.videos.results.length > 0) {
          setVideoKey(data.videos.results[0].key);
        }
      })
      .catch(error => console.error(error));
  }, [movieId]);

  const { title, poster_path, overview, runtime, release_date } = movieData;

  return (
    <div className='div-info'>
      <h1 className='h1-info'>{title}</h1>
      {videoKey ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img className='img-info' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Poster" />
      )}
      <p className='p-overview'>{overview}</p>
      <p className='p-runtime'>Duration: {runtime} minutes</p>
      <p className='p-release'>Release date: {release_date}</p>
    </div>
  );
};

export default Info;
