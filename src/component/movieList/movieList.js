import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../card/card';
import "./movieList.css";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    const getData = useCallback(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results));
    }, [type]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;
