import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import { FaSearch } from "react-icons/fa";
import '/src/styles/Search.css';

const apiKey = '03249b4940f77c24ab0611c35cc8a22f';

const Search = () => {
  const [searchMv, setSearchMv] = useState("");
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchMv}`;

  const { isLoading, data } = useFetch(API_URL);

  return (
    <div className="div-search">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          className="input-search"
          type="search"
          onChange={(e) => setSearchMv(e.target.value)}
          name=""
          id=""
          placeholder="Movie title"
        />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-results">
          {data.results.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="p-title">
                <b>{movie.title}</b>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
