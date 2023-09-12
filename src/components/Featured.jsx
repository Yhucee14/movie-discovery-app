
import PropTypes from 'prop-types'; 
import right from "../assets/right.png"

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const Featured = ({movies }) => {
  return (
    <div className='px-5 py-5'>
      <div className='flex flex-row justify-between py-2'>
        <h1>Featured Movie</h1>
          <a className='flex flex-row px-3 text-red-500'>See more <img src={right} alt="Logo" className="h-4 mt-1 px-3" /></a>
      </div>

    <div className='grid sm:grid-cols-4 gap-2 py-2'>
    {movies.map((movieReq) => (
      <div key={movieReq.id} className='card flex flex-col py-4 '>
        <img src={API_IMG + movieReq.poster_path} alt={movieReq.title} className='object-cover h-auto object-center'/>
        <span>{movieReq.release_date}</span>
        <h1>{movieReq.title}</h1>
        {/* <div className='flex flex-col justify-between'>
          <div>
            <img />
            <h1>{movieReq.}</h1>
          </div>
          <div></div>
        </div> */}

      </div>
    ))}
    </div>
  
    </div>
  )
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