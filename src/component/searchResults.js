import React, { useState, useEffect } from 'react';
import Cards from './card/card.js';

const SearchResults = ({ match }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${match.params.query}`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [match.params.query]);

  return (
    <div>
      {movies.map((movie) => (
        <Cards
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default SearchResults;
