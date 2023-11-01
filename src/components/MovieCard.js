import {Link} from 'react-router-dom';

function MovieCard({mov}) {
  
  return (
    <article>
        <h2>{mov.title}</h2>
        <Link to={`/movie/${mov.id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;