import React, { useState, useEffect } from 'react';
import Hero from '../src/components/Hero';
import Featured from './components/Featured';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ea276d358d5386e1de3f4615ae10ec26';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 10));
      });
  }, []);

  const [firstFiveMovies, setFirstFiveMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstFiveMovies(data.results.slice(0, 5));
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero firstFiveMovies={firstFiveMovies} movies={movies} setFirstFiveMovies={setFirstFiveMovies} setMovies={setMovies} />} />
        <Route path="/featured" element={<Featured movies={movies} setMovies={setMovies} />} />
        {/* Use the :id parameter in the path */}
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
