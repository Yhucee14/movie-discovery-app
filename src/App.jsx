import { useState,useEffect } from "react"
import Hero from "../src/components/Hero"

const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=328b25fcc08fbc96577be0d1fee70666";
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
  

  return (
    <div>
      {movies.map((movieReq)=>
      <Hero key={movieReq.id} {...movieReq} />)}
    </div>
  )
}

export default App