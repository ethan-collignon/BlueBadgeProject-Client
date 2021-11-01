import React, { useState } from 'react';
import Movies from './Movies';

const MoviePage = () => {
    const [result, setResult] = useState('');
    const [query, setQuery] = useState('');
    const movieFinder = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d409bd554d496132585a99ab2a554474&language=en-US&query=${query}&pafe1&include_adult=false`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('fetch error');
                } else return res.json();
            })
            .then(json => {
                if (json.results.length === 0) {
                    throw new Error('no movie shown')
                } else {
                    const movieLength = Math.floor(Math.random() * json.results.length)
                    setResult(json.results[movieLength]);
                    console.log(json.results[movieLength]);
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="movie">
            <div className="Movies">
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={movieFinder}>Search Movie</button>
                {!result || !result.poster_path ? null : <Movies movie={result} />}
            </div>
        </div>
    )
};
export default MoviePage;



// d409bd554d496132585a99ab2a554474 API key /