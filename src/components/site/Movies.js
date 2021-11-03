import React from "react";
import styled from 'styled-components';


const Movie = styled.div`
margin-left: auto;
margin-right: auto;
margin-top: 10px;
width: 300px;
border-radius: 5px;
text-align: center;
background: lightgrey;
`;
const Poster = styled.img`
width: calc(100% - 20px);
height: calc(70% - 10px);
margin: 10px 10px 0 10px;
border-radius: 5px;
`;
const Title = styled.h5`
margin: 5px 0 0 0;
color: #090910;
font-family: tintoretto;
`;
const Description = styled.p`
height: 20%;
color: #090910;
overflow-wrap: break-word;
font-family: tintoretto;
`;
const Movies = ({ movie }) => {
    return (
        <Movie>
            <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Title>{movie.original_title}</Title>
            <Description>{movie.overview}</Description>
        </Movie>
    );
};

//     return (
//         <div>
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
//             <h3>{movie.original_title}</h3>
//             <p>{movie.overview}</p>
//         </div>
//     );
// };
export default Movies;