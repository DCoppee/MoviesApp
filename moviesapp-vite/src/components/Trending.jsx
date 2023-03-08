import React, { useState, useEffect } from 'react';
import '/src/styles/Trending.css';

const apiKey = '03249b4940f77c24ab0611c35cc8a22f';

const Trending = () => {
  const [mvPosters, setMvPosters] = useState([]);
  const [active, setActive] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        const posters = data.results.slice(0, 10).map(movie => `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
        setMvPosters(posters);
        setActive(new Array(posters.length).fill(false));
      })
      .catch(error => console.error(error));
  }, []);

  const handleClick = (index) => {
    fetch(`https://api.themoviedb.org/3/movie/popular/${index + 1}?api_key=${apiKey}&language=en-US`)
      .then(response => response.json())
      .then(data => setSelectedMovie(data))
      .catch(error => console.error(error));

    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  }
 

  return (
    <div className='div-trend'>
      <h1 className='h1-trend'>Trending</h1>
      <table className='table-trend'>
        <tbody className='tbody-trend'>
          <tr className='tr-trend'>        
            {mvPosters.map((poster, index) => (
              <td className='td-trend' key={poster}>
                <img 
                  className={`img-trend ${active[index] ? 'active' : ''}`} 
                  src={poster} 
                  alt="Movie Poster" 
                  onClick={() => handleClick(index)}
                />
                <p className='p-trend'>tMDb ⭐ {selectedMovie?.vote_average}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Trending;