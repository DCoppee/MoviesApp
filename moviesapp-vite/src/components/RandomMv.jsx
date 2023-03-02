import React, {useState, useEffect} from 'react';

const RandomMv = () => {
    const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US')
            .then(response => response.json())
            .then(data => {
                const randomMvIndex = Math.floor(Math.random() * data.results.length);
                setMovie(data.results[randomMvIndex]);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            {movie && (
                <div>
                    <img>{movie.images}</img>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
            )}
        </div>
    );
};

export default RandomMv;