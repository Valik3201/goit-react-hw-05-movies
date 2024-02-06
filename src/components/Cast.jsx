import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from 'services/fetchCast';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieCast = await fetchCast(movieId);
        setMovieCast(movieCast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieCast) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cast</h1>
      {movieCast.map(actor => (
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
