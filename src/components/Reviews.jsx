import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchReviews } from 'services/fetchReviews';

import { Loader } from './Loader';

import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Reviews = () => {
  const { movieId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['reviews', movieId],
    queryFn: () => fetchReviews(movieId),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="flex flex-col w-full max-w-5xl items-start gap-4 py-8">
      {data.map(review => (
        <ul key={review.id}>
          <li>
            <Card>
              <CardHeader>
                <CardTitle>{review.author}</CardTitle>
                <CardDescription>
                  {format(new Date(review.created_at), 'HH:mm, MMMM d, yyyy')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(
                  review.content
                ) ? (
                  <p>{parse(review.content)}</p>
                ) : (
                  <ReactMarkdown>{review.content}</ReactMarkdown>
                )}
              </CardContent>
            </Card>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Reviews;
