import React, { useState, useEffect } from 'react';
import Info from './Info';
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
      {selectedMovie && (
        <Link to={`/movie/${selectedMovie.id}`}><Info movie={selectedMovie} /></Link>
      )}
    </div>
  );
}

export default Trending;


/*import React, { useState, useEffect } from 'react';
import '/src/styles/Trending.css';

const apiKey = '03249b4940f77c24ab0611c35cc8a22f';

const Trending = () => {
  const [mvPosters, setMvPosters] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        const posters = data.results.slice(0, 10).map(movie => `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
        setMvPosters(posters);
      });
  }, []);

  return (
    <div className='div-trend'>
      <h1 className='h1-trend'>Trending</h1>
      <table className='table-trend'>
            <tbody className='tbody-trend'>
                <tr className='tr-trend'>        
                {mvPosters.map(poster => (
                    <td className='td-trend'></td>
          <img className='img-trend' src={poster} alt="Movie Poster" key={poster}/>
        ))}
      </td>
                ))}
                </tr>
            </tbody>
            </table>
    </div>
  );
    
};

export default Trending;*/
/*return (
        <div className='div-trend'>
            <h1 className='h1-trend'>Trending</h1>
            <table className='table-trend'>
            <tbody className='tbody-trend'>
                <tr className='tr-trend'>
                {movies.map(movie => (
                    <td className='td-trend' key={movie.id}>
                    <img className='img-trend' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie poster"></img>
                    <p className='p-trend'>tMDb ⭐ {movie.vote_average}</p>
                    </td>
                ))}
                </tr>
            </tbody>
            </table>
        </div>
    );*/
/*Avec un carrousel de la bibliothèque React Slick:
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Trending = () => {
    const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            const sortedMovies = data.results.sort((a, b) => b.vote_average - a.vote_average).slice(0, 10);
            setMovies(sortedMovies);
        })
        .catch(error => console.log(error));
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                {movies.map(movie => (
                <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500{movie.poster_path}`} alt={movie.title} />
                    <div>
                        <p>tMDb</p>
                        <p>⭐ {movie.vote_average}</p>
                    </div>
                    <div>
                        <h3>{movie.title}</h3>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    );
    };

    export default Trending;*/

/*import React from 'react';

const Trending = ({ movies }) => {
    const randomMvIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomMvIndex];

    return (
        <div>
            {movie && (
                <div>
                    <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Movie poster"></img>
                    <div>
                        <p>tMDb</p>
                        <p>⭐ {movie.vote_average}</p>
                    </div>
                    <div>
                        <h1>{movie.title}</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Trending;*/