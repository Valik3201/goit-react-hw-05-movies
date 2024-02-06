import { useState, useRef, useEffect } from 'react';
import { searchMovies } from 'services/searchMovies';
import { useSearchParams, Link } from 'react-router-dom';

const Movies = () => {
  const searchInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = async ({ query, year }) => {
    try {
      const searchData = await searchMovies({
        query: query,
        include_adult: false,
        language: 'en-US',
        primary_release_year: year,
        page: 1,
        region: '',
        year: '',
      });
      setSearchResults(searchData.results);
      setSearchParams({ query, ...(year && { year: year }) });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const q = searchParams.get('query') || '';
    const year = searchParams.get('year') || '';
    searchInputRef.current.value = q;
    yearInputRef.current.value = year;
  }, [searchParams]);

  return (
    <div>
      <h1>Search Movies</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSearch({
            query: searchInputRef.current.value.trim(),
            year: yearInputRef.current.value.trim(),
          });
        }}
      >
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
      <div>
        {searchResults.map(movie => (
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
