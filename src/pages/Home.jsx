import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingData } from 'services/fetchTrendingData';

const Home = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['tranding'],
    queryFn: fetchTrendingData,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Trending Movies and TV Shows
      </h1>
      <div>
        {data.map(movie => (
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
