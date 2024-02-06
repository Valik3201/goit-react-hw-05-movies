import { useState, useRef } from 'react';
import { searchMovies } from 'services/searchMovies';

const Movies = () => {
  const searchInputRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    const query = searchInputRef.current.value;
    try {
      const searchData = await searchMovies(query);
      setSearchResults(searchData.results);
    } catch (error) {
      console.error(error);
    }
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
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map(movie => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <p>Title: {movie.title}</p>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
