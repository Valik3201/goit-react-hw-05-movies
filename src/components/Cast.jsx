import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchCast } from 'services/fetchCast';

const Cast = () => {
  const { movieId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['cast', movieId],
    queryFn: () => fetchCast(movieId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Cast</h1>
      {data.map(actor => (
        <ul key={actor.id}>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
              alt={actor.name}
            />
            <h4>{actor.name}</h4>
            <h5>{actor.character}</h5>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Cast;
