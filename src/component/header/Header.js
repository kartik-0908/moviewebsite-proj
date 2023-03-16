import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Cards from '../card/card';


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${searchQuery}`
    );
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
    // history.push('/search-results');
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header-icon"
            src="https://cdn.dribbble.com/users/612987/screenshots/9500879/eagle_logo.jpg"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="headerRight">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchQuery}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {movies.map((movie) => (
       
        <Cards
          key={movie.id}
          movie={movie}
          title={movie.title}
          overview={movie.overview}
          poster={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default Header;
