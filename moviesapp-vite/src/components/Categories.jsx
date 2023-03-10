import React, { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';
import '/src/styles/Categories.css';

const genresList = [
  { id: 14, name: 'Fantasy' },
  { id: 27, name: 'Horror' },
  { id: 99, name: 'Documentary' },
  { id: 36, name: 'History' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 53, name: 'Thriller' },
];

const Categories = () => {
  const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(14);

  const { isLoading, data, error } = useFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);

  useEffect(() => {
    if (data) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${selectedGenre}`)
        .then(response => response.json())
        .then(data => setMovies(data.results.slice(0, 10)))
        .catch(error => console.log(error));
    }
  }, [selectedGenre, data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='div-categories'>
      <table className='tb-categories'>
        <tbody>
          <tr>
            {genresList.map(genre => (
              <td key={genre.id}>
                <a className={selectedGenre === genre.id ? 'selected' : ''} href='#' onClick={() => setSelectedGenre(genre.id)}>{genre.name}</a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className='div-movies'>
        {movies.map(movie => (
          <div className='div-movie' key={movie.id}>
            <img className='img-movie' src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            <h3 className='h3-movie'>{movie.title} ({movie.release_date})</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

/*import React, { useState, useEffect } from 'react';
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

export default Categories;*/