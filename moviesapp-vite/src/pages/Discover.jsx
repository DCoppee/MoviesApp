import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header';
import Info from '../components/Info';
import Search from '/src/components/Search';
import Categories from '/src/components/Categories';
import Footer from '/src/components/Footer';

import '/src/styles/Discover.css';


const Discover = () => {
    const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US')
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }, []);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
          .then(response => response.json())
          .then(data => setGenres(data.genres))
          .catch(error => console.log(error));
      }, []);

    const handleSearchInputChange = (event) => {
      setSearchInput(event.target.value);
    }

    return (
        <div className='div-discover'>
          <Header />
          <Search onInputChange={handleSearchInputChange} />
          {searchInput === "" && <Categories genres={genres} />}
          <Info />
          <Footer />
        </div>
    );
};

export default Discover;

/*import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header';
import Search from '/src/components/Search';
import Categories from '/src/components/Categories';
import Footer from '/src/components/Footer';
import '/src/styles/Discover.css';

const Discover = () => {
    const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US')
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }, []);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
          .then(response => response.json())
          .then(data => setGenres(data.genres))
          .catch(error => console.log(error));
      }, []);

    return (
        <div className='div-discover'>
      <Header /><Search movies={movies} /><Categories /><Footer />
        </div>
    );
};

export default Discover;*/