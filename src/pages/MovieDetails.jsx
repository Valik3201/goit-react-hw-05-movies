import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <h1>MovieDetails</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
