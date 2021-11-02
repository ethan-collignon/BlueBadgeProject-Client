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
                <br />
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button class="bi bi-film" style={{backgroundColor:"#bc2026"}} onClick={movieFinder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                </svg>Search</button >
                {!result || !result.poster_path ? null : <Movies movie={result} />}
            </div>
        </div>
    )
};
export default MoviePage;



// d409bd554d496132585a99ab2a554474 API key /