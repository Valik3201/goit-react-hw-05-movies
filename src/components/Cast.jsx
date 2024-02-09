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
    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 py-4 text-xs">
      {data.map(actor => (
        <ul key={actor.id}>
          <li>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : `https://placehold.co/185x278?text=${actor.name}`
              }
              alt={actor.name}
              className="rounded-lg mb-2"
            />
            <p className="font-bold">{actor.name}</p>
            <p className="text-muted-foreground">{actor.character}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Cast;
