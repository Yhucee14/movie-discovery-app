import { useState,useEffect } from "react"
import Hero from "../src/components/Hero"

const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=ea276d358d5386e1de3f4615ae10ec26";


const App = () => {

  const [movies, setMovies] = useState([])
  

  useEffect(() => {
   fetch(API_URL)
   .then((res)=>res.json())
   .then(data=>{
    console.log(data)
    setMovies(data.results);
   })
  }, [])

  const [firstFiveMovies, setFirstFiveMovies] = useState([]);

useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setFirstFiveMovies(data.results.slice(0, 5));
    });
}, []);


  // const firstFiveMovies = movies.slice(0, 5);
  

  return (
    <div>
      <Hero firstFiveMovies={firstFiveMovies} setFirstFiveMovies={setFirstFiveMovies} setMovies={setMovies}/>
    </div>
  )
}

export default App