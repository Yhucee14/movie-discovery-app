import { useState, useEffect } from 'react';
import Hero from '../src/components/Hero';
import Featured from './components/Featured';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const movieUrl = import.meta.env.VITE_MOVIEBOX_URL;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 10));
      });
  }, []);

  const [firstFiveMovies, setFirstFiveMovies] = useState([]);

  useEffect(() => {
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstFiveMovies(data.results.slice(0, 3));
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero firstFiveMovies={firstFiveMovies} movies={movies} setFirstFiveMovies={setFirstFiveMovies} setMovies={setMovies} />} />
        <Route path="/featured" element={<Featured movies={movies} setMovies={setMovies} />} />
     
        <Route path="/movies/:id" element={<MovieDetails firstFiveMovies={firstFiveMovies} />} />
      </Routes>
    </Router>
  );
};

export default App;
