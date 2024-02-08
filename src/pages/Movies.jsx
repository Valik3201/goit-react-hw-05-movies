import { useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from 'services/searchMovies';

const Movies = () => {
  const searchInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['searchMovies'],
    queryFn: async () => {
      return await searchMovies({
        query: searchInputRef.current?.value.trim(),
        include_adult: false,
        language: 'en-US',
        primary_release_year: yearInputRef.current?.value.trim(),
        page: 1,
        region: '',
        year: '',
      });
    },
  });

  const handleSearch = async e => {
    e.preventDefault();
    const searchQuery = searchInputRef.current.value.trim();
    const releaseYear = yearInputRef.current.value.trim();

    setSearchParams({
      query: searchQuery,
      ...(releaseYear && { year: releaseYear }),
    });

    refetch({
      query: searchQuery,
      include_adult: false,
      language: 'en-US',
      primary_release_year: releaseYear,
      page: 1,
      region: '',
      year: '',
    });
  };

  useEffect(() => {
    const q = searchParams.get('query') || '';
    const year = searchParams.get('year') || '';
    searchInputRef.current.value = q;
    yearInputRef.current.value = year;
  }, [searchParams]);

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Search Movies
      </h1>
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
        {data?.map(movie => (
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
