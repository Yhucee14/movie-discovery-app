import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_KEY = 'ea276d358d5386e1de3f4615ae10ec26'; 
const API_URL = 'https://api.themoviedb.org/3/movie/';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Get the navigate function
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}${id}?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Movie not found.');
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleBackButtonClick = () => {
    // Navigate back to the previous page (e.g., the movie list or home)
    navigate(-1);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 data-testid="movie-title">{movieDetails.title}</h2>
      <p data-testid="movie-release-date">{movieDetails.release_date}</p>
      <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
      <button onClick={handleBackButtonClick}>Back</button>
    </div>
  );
};

export default MovieDetails;
