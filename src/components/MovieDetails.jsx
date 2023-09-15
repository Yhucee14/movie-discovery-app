import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tv from "../assets/tv.png"
import Home from "../assets/Home.png"
import movie from "../assets/movie.png"
import series from "../assets/series.png"
import calendar from "../assets/calendar.png"
import Logout from "../assets/Logout.png"
import List from "../assets/List.png"
import ticket from "../assets/ticket.png"
import down from "../assets/down.png"
import { Link } from 'react-router-dom';
import Menu from "../assets/Menu.png";
import Close from "../assets/Close.png";

const movieKey = import.meta.env.VITE_MOVIEBOX_KEY;
const API_URL = 'https://api.themoviedb.org/3/movie/';


const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [credits, setCredits] = useState(null);
    const [showNavbar, setShowNavbar] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}${id}?api_key=${movieKey}`);
                if (!response.ok) {
                    throw new Error('Movie not found.');
                }
                const data = await response.json();
                setMovieDetails(data);

                const creditsResponse = await fetch(`${API_URL}${id}/credits?api_key=${movieKey}`);
                if (creditsResponse.ok) {
                    const creditsData = await creditsResponse.json();
                    setCredits(creditsData);
                } else {
                    console.error('Credits data not available.');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movieDetails) {
        return <div className='p-50'>Loading...</div>;
    }

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
        setIsMenuOpen(!isMenuOpen); 
    };

    const getReleaseDateMillis = (dateStr) => {
        const date = new Date(dateStr);
        return date.getTime();
      };

    return (
        <div className='xx:px-4 sm:px-6 flex flex-row sm:flex-row  justify-between'>
             <div className={`cursor-pointer sm:visible ${showNavbar ? 'hidden' : ''}`} onClick={toggleNavbar}>
                {isMenuOpen ? (
                    <img src={Close} alt="Close Icon" className="h-8 w-8 ml-4 mt-4 z-10" />
                ) : (
                    <img src={Menu} alt="Menu Icon" className="h-7 w-7 mt-2" />
                )}
            </div>

            
                  <nav className={`sm:w-[24%] border-2 flex flex-col sm:rounded-r-3xl rounded-r-3xl items-center py-2 border-gray-400 ${showNavbar ? '' : 'hidden'}`}>
                  <div className="flex items-center mr-2 py-1">
                      <img src={tv} alt="Logo" className="h-8 w-8 mr-2" />
                      <h1 className=" text-lg font-semibold px-2">MovieBox</h1>
                  </div>
  
                  <nav className='flex flex-col xx:py-4 sm:py-7'>
                      <Link to='/'>
                          <div className="px-10 py-8  flex hover:bg-[#f7d9e0] hover:text-[#BE123C] hover:font-bold hover:border-r-4 hover:border-[#BE123C] text-black flex-row transition duration-300">
                              <img src={Home} alt="Logo" className="h-6 w-6 mr-2" />
                              <a className="px-2 mr-12">Home </a>
                          </div>
                      </Link>
  
                      <Link to='/'>
                          <div className="px-10 py-8 flex hover:bg-[#f7d9e0] hover:text-[#BE123C] hover:font-bold hover:border-r-4 hover:border-[#BE123C] text-black flex-row transition duration-300">
                              <img src={movie} alt="Logo" className="h-6 w-6 mr-2" />
                              <a className="px-2 mr-12">Movies </a>
                          </div>
                      </Link>
  
                      <Link to='/'>
                          <div className="px-9 py-8  flex hover:bg-[#f7d9e0] hover:text-[#BE123C] hover:font-bold hover:border-r-4 hover:border-[#BE123C] text-black flex-row transition duration-300">
                              <img src={series} alt="Logo" className="h-6 w-6 mr-2" />
                              <a className="px-1 mr-4 hover:mr-3 flex">TV Series </a>
                          </div>
                      </Link>
  
                      <Link to='/'>
                          <div className="px-10 py-8  flex hover:bg-[#f7d9e05b] hover:text-[#BE123C] hover:font-bold hover:border-r-4 hover:border-[#BE123C] text-black flex-row transition duration-300">
                              <img src={calendar} alt="Logo" className="h-6 w-6 mr-2" />
                              <a className="px-1 mr-4 hover:mr-3 flex">Upcoming </a>
                          </div>
                      </Link>
                  </nav>
  
                  <div className='px-3 flex flex-col py-8 w-[166px] border-2 border-[#BE123C] rounded-3xl bg-[#f7d9e05b]'>
                      <h1 className='py-3 font-semibold'>
                          play movie quizes and earn free tickets
                      </h1>
                      <p className='py-2'>50k people are playing now</p>
                      <button className='bg-[#f7d9e0] flex items-center justify-center py-2 mt-2 rounded-full font-semibold text-[#BE123C]'>
                          Start playing
                      </button>
                  </div>
  
                  <div className="flex items-center mr-2 py-4 mt-7">
                      <img src={Logout} alt="Logo" className="h-8 w-8 mr-2" />
                      <h1 className=" text-lg font-semibold px-2">Log out</h1>
                  </div>
              </nav>
            
          

            <div className='w-full xx:px-1 xx:mt-7  sm:px-5 sm:w-[77%] xx:w-full'>
                <div className='p-5 flex justify-center w-full'>
                    <div className="relative w-full">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            className='w-full h-[380px]'
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <button
                                className="bg-gray-100  border border-gray-400 rounded-full p-4 hover:bg-white hover:text-black text-black transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 4.293a1 1 0 011.32-.083l6 4a1 1 0 010 1.66l-6 4a1 1 0 01-1.237-1.237l4-6a1 1 0 01.083-1.32z"
                                        clipRule="evenodd"
                                    />
                                </svg>


                            </button> <h1 className='text-white text-lg font-bold'>Watch Trailer</h1>
                        </div>
                    </div>

                </div>

                <div className='flex sm:flex-row xx:flex-col items-center'>
                    <h2 data-testid="movie-title" className='pr-3 px-2 xx:py-2 sm:py-4 font-semibold'>Title: {movieDetails.title} .</h2>
                    <p data-testid="movie-release-date" className='px-3 xx:py-2 sm:py-4 font-semibold'> {getReleaseDateMillis(movieDetails.release_date)}</p>
                    <p data-testid="movie-runtime" className='px-3 xx:py-2 sm:py-4 font-semibold'>{movieDetails.runtime} minutes</p>
                </div>

                <div className='grid xx:grid-cols-1 sm:grid-cols-2 xx:gap-4 sm:gap-12'>
                    <div className='xx:w-full  px-2 py-1 '>
                        <p data-testid="movie-overview" className='w-full py-4'>{movieDetails.overview}</p>

                        {credits && (
                            <>
                                <div className='flex xx:flex-col sm:flex-row py-2'>
                                    <h3>Director:</h3>
                                    {credits.crew
                                        .filter(member => member.job === "Director")
                                        .map(member => (
                                            <p key={member.id} className='px-1 flex text-[#BE123C]'>{member.name}</p>
                                        ))}
                                </div>
                                <div className='flex xx:flex-col sm:flex-row py-2 w-[400px]'>
                                    <h3>Actors:</h3>
                                    {credits.cast
                                        .slice(0, 3)
                                        .map(actor => (
                                            <p key={actor.id} className='px-1  flex text-[#BE123C]'>{actor.name}</p>
                                        ))}
                                </div>
                                <div className='flex xx:w-full sm:w-[480px] xx:flex-col sm:flex-row py-2'>
                                    <h3>Writers: </h3>
                                    {credits.crew
                                        .filter(member => member.department === "Writing")
                                        .slice(0, 3)
                                        .map(member => (
                                            <p key={member.id} className='px-1 text-[#BE123C]'>{member.name}</p>
                                        ))}
                                </div>
                            </>
                        )}

                        <div className='grid xx:grid-cols-1 sm:grid-cols-2 xx:w-full sm:w-[420px] mr-6'>

                            <button className='bg-[#BE123C] flex mt-5 px-1 justify-center flex-row text-white hover:border-2 hover:border-black py-2 rounded-lg '>
                                <a className="px-1 font-semibold ">Top rated movie #{movieDetails.id}</a>
                            </button>

                            <button className='bg-white hover:border-2 hover:border-black border-2 border-gray-403  mt-4 ml-2 flex justify-center flex-row text-black py-3 rounded-lg '>
                                <a className="px-1 font-semibold flex">Awards 9 nominations </a>
                                <img src={down} alt="Logo" className="h-5 w-5 mr-2 mt-1" />
                            </button>
                        </div>
                    </div>

                    <div className=' xx:w-full sm:ml-2 flex flex-col justify-center sm:mb-16 px-3'>
                        <button className='bg-[#BE123C] flex hover:border-2 hover:border-black justify-center flex-row text-white py-2 rounded-lg '>
                            <img src={ticket} alt="Logo" className="h-7 w-7 mr-2" />
                            <a className="px-1 font-semibold flex">See Showtimes </a>
                        </button>

                        <button className='bg-[#f7d9e0] hover:border-2 hover:border-black mb-12 border-2 border-[#BE123C]  mt-4 flex justify-center flex-row text-black py-2 rounded-lg '>
                            <img src={List} alt="Logo" className="h-7 w-7 mr-2" />
                            <a className="px-1 font-semibold flex">More watch options </a>
                        </button>


                            <div >
                                <div className=' py-2 px-3 pb-4'>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                                        alt={movieDetails.title}
                                        className='w-full h-[170px]'
                                    />
                                </div>

                            

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default MovieDetails;
