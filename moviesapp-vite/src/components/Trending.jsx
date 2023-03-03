import React from 'react';

const Trending = ({movies}) => {
    const bestMvIndex = movies.sort((a, b) => b.vote_average - a.vote_average).slice(0, 10);
    const movie = movies[bestMvIndex];

    return (
        <table>
        <tbody>
            <tr>
            {movies.map(movie => (
                <td key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie poster"></img>
                <h1>{movie.title}</h1>
                <p>⭐ {movie.vote_average}</p>
                </td>
            ))}
            </tr>
        </tbody>
        </table>
    );
};

export default Trending;

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