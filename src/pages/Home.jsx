import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
            <p>{movie.media_type}</p>
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

export default Home;
