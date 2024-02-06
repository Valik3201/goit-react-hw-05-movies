import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { fetchMovieDetails } from 'services/fetchMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>MovieDetails</h1>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
        />
        <h1>{movieDetails.original_title}</h1>
        <p>{movieDetails.overview}</p>
        <h5>
          <i>{movieDetails.tagline}</i>
        </h5>

        <h4>Genres</h4>
        {movieDetails.genres.map(genre => (
          <ul key={genre.id}>
            <li>{genre.name}</li>
          </ul>
        ))}

        <h4>Production Companies</h4>
        {movieDetails.production_countries.map(country => (
          <ul key={country.iso_3166_1}>
            <li>{country.name}</li>
          </ul>
        ))}
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
