import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search({ movies }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length > 0) {
      const movieId = results[0].id;
      navigate(`/details/${movieId}`);
    } else {
      // Gérer le cas où aucun résultat n'est trouvé
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default Search;