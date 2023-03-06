import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header';
import Search from '/src/components/Search';
import Footer from '/src/components/Footer';
import '/src/styles/Discover.css';

const Discover = () => {
    const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US')
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className='div-discover'>
      <Header /><Search movies={movies} /><Footer />
        </div>
    );
};

export default Discover;