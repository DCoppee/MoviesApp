import React, { useState, useEffect } from 'react';
import '/src/styles/Spotlight.css';

const apiKey = '03249b4940f77c24ab0611c35cc8a22f';

const Spotlight = () => {
    const [videoKey, setvideoKey] = useState('');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

            fetch(`https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${apiKey}`)
            .then(response => response.json())
            .then(videoData => {

                const videoKey = videoData.results.find(result => result.type === 'Trailer')?.key;
                setvideoKey(videoKey);
            });
        });
    }, []);

    return (
        <div>
        {videoKey && (
            <iframe className='video-spotlight'
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        )}
        </div>
    );
    };

export default Spotlight;