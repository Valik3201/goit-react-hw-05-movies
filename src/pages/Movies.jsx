import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from 'services/searchMovies';

const Movies = () => {
  const searchInputRef = useRef(null);
  const yearInputRef = useRef(null);

  const searchQuery = searchInputRef.current?.value.trim();
  const releaseYear = yearInputRef.current?.value.trim();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['searchMovies', searchQuery, releaseYear],
    queryFn: async () => {
      return await searchMovies({
        query: searchQuery,
        include_adult: false,
        language: 'en-US',
        primary_release_year: releaseYear,
        page: 1,
        region: '',
        year: '',
      });
    },
    enabled: false,
  });

  const handleSearch = async e => {
    e.preventDefault();
    data.refetch();
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Enter movie title..."
        />
        <input
          type="text"
          ref={yearInputRef}
          placeholder="Enter release year..."
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data: {error.message}</div>}
      <div>
        {data.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
            <h3>{movie.title || movie.name}</h3>
            <h4>
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : new Date(movie.first_air_date).getFullYear()}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
