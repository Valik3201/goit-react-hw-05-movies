import { useState, useEffect } from 'react';
import { fetchTrendingData } from 'services/fetchTrendingData';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingData = await fetchTrendingData();
        console.debug(trendingData);
        setMovies(trendingData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending Movies and TV Shows</h1>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
            <p>
              {movie.media_type === 'movie' ? 'Title' : 'Name'}:{' '}
              {movie.title || movie.name}
            </p>
            <p>Media Type: {movie.media_type}</p>
            <p>
              {movie.media_type === 'movie' ? 'Release Date' : 'First Air Date'}
              : {movie.release_date || movie.first_air_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;