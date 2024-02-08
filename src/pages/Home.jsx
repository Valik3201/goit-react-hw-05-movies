import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingData } from 'services/fetchTrendingData';

import { Badge } from '@/components/ui/badge';

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
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        Trending Movies and TV Shows
      </h1>
      <div className="grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4">
        {data.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
            <Badge>
              {movie.media_type.charAt(0).toUpperCase() +
                movie.media_type.slice(1)}
            </Badge>

            <h3 className="scroll-m-20 text-md font-bold tracking-tight">
              {movie.title || movie.name}
            </h3>
            <h4 className="text-md text-muted-foreground font-semibold">
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
