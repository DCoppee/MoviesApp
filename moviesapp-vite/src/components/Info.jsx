import React from 'react';

const Info = ({ movie }) => {
  const title = movie.title;
  const popularity = movie.popularity;
  const duration = movie.runtime;
  const voteAverage = movie.vote_average;
  const releaseDate = movie.release_date;
  const genres = movie.genres.map((genre) => genre.name).join(", ");
  const synopsis = movie.overview;

  return (
    <div className="info-container">
      <div className="info-header">
        <h2>{title}</h2>
        <p>{genres}</p>
      </div>
      <div className="info-body">
        <p>{synopsis}</p>
        <div className="info-details">
          <div className="detail">
            <span className="label">Popularity:</span>
            <span className="value">{popularity}</span>
          </div>
          <div className="detail">
            <span className="label">Duration:</span>
            <span className="value">{duration} minutes</span>
          </div>
          <div className="detail">
            <span className="label">Vote average:</span>
            <span className="value">{voteAverage}</span>
          </div>
          <div className="detail">
            <span className="label">Release date:</span>
            <span className="value">{releaseDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
