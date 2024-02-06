import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchReviews } from 'services/fetchReviews';

import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';

const Reviews = () => {
  const { movieId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['reviews', movieId],
    queryFn: () => fetchReviews(movieId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Reviews</h1>
      {data.map(review => (
        <ul key={review.id}>
          <li>
            <h4>{review.author}</h4>

            <p>{format(new Date(review.created_at), 'MMMM d, yyyy H:mm')}</p>

            {/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(
              review.content
            ) ? (
              <div>{parse(review.content)}</div>
            ) : (
              <div>
                <ReactMarkdown>{review.content}</ReactMarkdown>
              </div>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Reviews;
