import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { fetchMovieDetails } from 'services/fetchMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: () => fetchMovieDetails(movieId),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
          alt={data.original_title}
        />
        <h1>{data.original_title}</h1>
        <h5>
          <i>{data.tagline}</i>
        </h5>

        <p>{data.overview}</p>

        <h4>Genres</h4>
        {data.genres.map(genre => (
          <ul key={genre.id}>
            <li>{genre.name}</li>
          </ul>
        ))}

        <h4>Production Companies</h4>
        {data.production_countries.map(country => (
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
