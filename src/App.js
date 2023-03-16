import React from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import SearchResults from './component/searchResults';

import Header from "./component/header/Header";
import Home from "./pages/home/home";
import MovieList from "./component/movieList/movieList";
import Movie from "./pages/aboutMovie/movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route index element = {<Home />}></Route>
            <Route path="/search/:query" component={SearchResults}></Route>     
            <Route path="movie/:id" element = {<Movie />}></Route>
            <Route path="movies/:type" element = {<MovieList />}></Route>
            <Route path="/*" element = {<h1>movie error page</h1>}></Route>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
