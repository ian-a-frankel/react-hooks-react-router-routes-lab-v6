import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"

function Home() {

  const [movies, setMovies] = useState([])
  useEffect(() => {fetch('http://localhost:4000/movies')
  .then(res => res.json())
  .then(movieData => {setMovies(movieData)})}, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
{/* This component should render on the / 
route. It should display the text Home Page
 in an <h1>. It should also render a list of 
 movies using MovieCard components. */}


        <h1>Home Page</h1>

        {movies.map(movie => <MovieCard key={movie.id} mov={movie} />)}



      </main>
    </>
  );
};

export default Home;
