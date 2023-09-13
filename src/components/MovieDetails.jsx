import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tv from "../assets/tv.png"
import Home from "../assets/Home.png"
import movie from "../assets/movie.png"
import series from "../assets/series.png"
import calendar from "../assets/calendar.png"
import Logout from "../assets/Logout.png"
import { Link } from 'react-router-dom';

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
        <div className='p-5 px-6 flex flex-row justify-between'>

            <div className='w-[23%] border-2 flex flex-col rounded-r-3xl items-center py-2 border-gray-400'>
                <div className="flex items-center mr-2">
                    <img src={tv} alt="Logo" className="h-8 w-8 mr-2" />
                    <h1 className=" text-lg font-semibold px-2">Movie Box</h1>
                </div>

                <nav className='flex flex-col py-7'>
                    <Link to='/'>
                        <div className="px-10 py-5  flex hover:bg-[#f7d9e0] hover:text-[#BE123C] hover:font-bold hover:border-r-4 hover:border-[#BE123C] text-black flex-row transition duration-300">
                            <img src={Home} alt="Logo" className="h-6 w-6 mr-2" />
                            <a className="px-2 mr-12">Home </a>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="px-10 py-5  flex hover:bg-[#f7d9e0] hover:text-[#BE123C] hover:font-bold hover:border-r-4 hover:border-[#BE123C] text-black flex-row transition duration-300">
                            <img src={movie} alt="Logo" className="h-6 w-6 mr-2" />
                            <a className="px-2 mr-12">Movies </a>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="px-10 py-5  flex hover:bg-[#f7d9e0] hover:text-[#BE123C] hover:font-bold hover:border-r-4 hover:border-[#BE123C] text-black flex-row transition duration-300">
                            <img src={series} alt="Logo" className="h-6 w-6 mr-2" />
                            <a className="px-1 mr-4 hover:mr-3 flex">TV Series </a>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="px-10 py-5  flex hover:bg-[#f7d9e05b] hover:text-[#BE123C] hover:font-bold hover:border-r-4 hover:border-[#BE123C] text-black flex-row transition duration-300">
                            <img src={calendar} alt="Logo" className="h-6 w-6 mr-2" />
                            <a className="px-1 mr-4 hover:mr-3 flex">Upcoming </a>
                        </div>
                    </Link>
                </nav>

                <div className='px-3 flex flex-col py-6 w-[190px] border-2 border-[#BE123C] rounded-3xl bg-[#f7d9e05b]'>
                    <h1 className='py-3 font-semibold'>
                        play movie quizes and earn free tickets
                    </h1>
                    <p className='py-2'>50k people are playing now</p>
                    <button className='bg-[#f7d9e0] flex items-center justify-center py-2 mt-2 rounded-full font-semibold text-[#BE123C]'>
                        Start playing
                    </button>
                </div>

                <div className="flex items-center mr-2 py-7">
                    <img src={Logout} alt="Logo" className="h-8 w-8 mr-2" />
                    <h1 className=" text-lg font-semibold px-2">Log out</h1>
                </div>
            </div>

            <div className='w-[74%] px-5'>
                <div className='p-20 flex justify-center'>
                    video
                </div>
                <div className='flex flex-row '>
                    <h2 data-testid="movie-title" className='pr-3 py-4 font-semibold'>{movieDetails.title} .</h2>
                    <p data-testid="movie-release-date" className='px-3 py-4 font-semibold'>{movieDetails.release_date}</p>
                    <p data-testid="movie-runtime" className='px-3 py-4 font-semibold'>{movieDetails.runtime} minutes</p>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                    <div className='w-[120%]  '>
                        <p data-testid="movie-overview">{movieDetails.overview}</p>
                    </div>
                    <div className='w-[150px] flex justify-items-start justify-center'>
                        box
                    </div>
                </div>



                <button onClick={handleBackButtonClick}>Back</button>
            </div>

        </div>
    );
};

export default MovieDetails;
