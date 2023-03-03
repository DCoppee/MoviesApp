import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header';
import Spotlight from '/src/components/Spotlight';
import Trending from '/src/components/Trending'
import Footer from '/src/components/Footer';

const Home = () => {
  const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Header /><Spotlight movies={movies} /><Trending movies={movies} /><Footer />
    </div>
  );
};

export default Home;