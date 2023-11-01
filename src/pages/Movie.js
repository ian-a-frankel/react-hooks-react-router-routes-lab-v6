import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const params = useParams()
  const movieId = params.id

  const [movie,setMovie] = useState({})

  function retrieveMovie() {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(result => result.json())
    .then(data => {console.log(data)
    setMovie(data)})
  }

  useEffect(() => {console.log(movieId)
    retrieveMovie()}, [setMovie, movieId])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>

      
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      {movie.title ? (movie.genres.map(genre => 
      <span key={genre}>{genre}</span>)) : (<></>) }

      </main>
    </>
  );
};

export default Movie;
