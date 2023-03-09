import React, { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';
import '/src/styles/Categories.css';

const Categories = ({ genreId }) => {
  const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');

  const { isLoading, data, error } = useFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);

  useEffect(() => {
    if (data) {
      const genreObj = data.genres.find(genre => genre.id === genreId);
      if (genreObj) {
        setGenre(genreObj.name);
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`)
          .then(response => response.json())
          .then(data => setMovies(data.results.slice(0, 10)))
          .catch(error => console.log(error));
      }
    }
  }, [genreId, data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!genre) return null;

  return (
    <div className='div-categories'>
        <h2 className='h2-categories'>{genre}</h2>
        {movies.map(movie => (
        <div className='div-movie' key={movie.id}>
            <img className='img-movie' src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            <h3 className='h3-movie' >{movie.title} ({movie.release_date})</h3>
        </div>
        ))}
    </div>
  );
};

export default Categories;