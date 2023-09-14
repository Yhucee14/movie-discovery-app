
import PropTypes from 'prop-types'; 
import right from "../assets/right.png"
import { Link } from 'react-router-dom';
import imdb from "../assets/IMDB.png";

const imgUrl = import.meta.env.VITE_MOVIEBOX_IMG;

const Featured = ({ movies }) => {
  return (
    <div className='px-5 py-5'>
      <div className='flex flex-row justify-between py-2'>
        <h1>Featured Movie</h1>
        <a className='flex flex-row px-3 text-red-500'>
          See more <img src={right} alt="Logo" className="h-4 mt-1 px-3" />
        </a>
      </div>

      <div className='grid sm:grid-cols-4 gap-2 py-2'>
        {movies.map((movieReq) => (
          <Link key={movieReq.id} to={`/movies/${movieReq.id}`}>
            <div data-testid="movie-card" className='card flex flex-col py-4 '>
              <img data-testid="movie-poster" src={imgUrl + movieReq.poster_path} alt={movieReq.title} className='object-cover h-auto object-center' />
              <span data-testid="movie-release-date"> {movieReq.release_date}</span>
              <h1 data-testid="movie-title" className='font-bold text-lg'>{movieReq.title}</h1>
              <div className='flex flex-row'>
                    <div className='flex flex-row py-2'>
                      <img src={imdb} alt='img' className='w-9 mt-0.5 h-5'/>
                      <h6 className='px-6'>{movieReq.vote_average} / 10</h6>
                    </div>
                  </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Featured.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,


};

export default Featured