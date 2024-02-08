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
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
          alt={data.original_title}
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {data.original_title}
        </h1>

        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {data.tagline}
        </blockquote>

        <p className="leading-7 [&:not(:first-child)]:mt-6">{data.overview}</p>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Genres
        </h4>
        {data.genres.map(genre => (
          <ul key={genre.id} className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>{genre.name}</li>
          </ul>
        ))}

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Production Companies
        </h4>
        {data.production_countries.map(country => (
          <ul
            key={country.iso_3166_1}
            className="my-6 ml-6 list-disc [&>li]:mt-2"
          >
            <li>{country.name}</li>
          </ul>
        ))}
      </div>
      <ul>
        <li>
          <Link
            to="cast"
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
