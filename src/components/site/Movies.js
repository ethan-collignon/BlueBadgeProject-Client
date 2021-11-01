import React from "react";
const Movies = ({ movie }) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h3>{movie.original_title}</h3>
            <p>{movie.overview}</p>
        </div>
    );
};
export default Movies;