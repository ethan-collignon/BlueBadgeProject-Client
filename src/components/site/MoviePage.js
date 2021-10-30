import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SearchArea from './SearchArea';



const MoviePage = async (e) => {
    e.preventDefault();
    this.apikey = process.env.REACT_APP_API;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${''}`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ move: data.result[0] })
    console.log(data)

    return (
        <div>
            <SearchArea />
        </div>


    )
};

export default MoviePage;