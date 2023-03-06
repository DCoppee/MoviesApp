import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import '/src/styles/Details.css';

const Details = () => {
    /*const apiKey = '03249b4940f77c24ab0611c35cc8a22f';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US')
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }, []);*/

    return (
        <div className='div-details'>
      <Header /><Footer />
        </div>
    );
};

export default Details;