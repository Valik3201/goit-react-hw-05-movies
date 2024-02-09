import { useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from 'services/searchMovies';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const Movies = () => {
  const searchInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['searchMovies'],
    queryFn: async () => {
      return await searchMovies({
        query: searchInputRef.current?.value.trim(),
        include_adult: false,
        language: 'en-US',
        primary_release_year: yearInputRef.current?.value.trim(),
        page: 1,
        region: '',
        year: '',
      });
    },
  });

  const handleSearch = async e => {
    e.preventDefault();
    const searchQuery = searchInputRef.current.value.trim();
    const releaseYear = yearInputRef.current.value.trim();

    setSearchParams({
      query: searchQuery,
      ...(releaseYear && { year: releaseYear }),
    });

    refetch({
      query: searchQuery,
      include_adult: false,
      language: 'en-US',
      primary_release_year: releaseYear,
      page: 1,
      region: '',
      year: '',
    });
  };

  useEffect(() => {
    const q = searchParams.get('query') || '';
    const year = searchParams.get('year') || '';
    searchInputRef.current.value = q;
    yearInputRef.current.value = year;
  }, [searchParams]);

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        Search Movies
      </h1>
      <form onSubmit={handleSearch}>
        <div className="flex flex-col sm:flex-row w-full max-w-2xl items-start gap-2 pb-8">
          <Input
            type="text"
            ref={searchInputRef}
            placeholder="Enter movie title..."
          />
          <Input
            type="text"
            ref={yearInputRef}
            placeholder="Enter release year..."
          />
          <Button type="submit">
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data: {error.message}</div>}
      <div className='className="grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {data?.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="h-auto w-auto object-cover transition-all hover:scale-105"
                />
              </div>
              <h3 className="scroll-m-20 text-md font-bold tracking-tight">
                {movie.title || movie.name}
              </h3>
              <h4 lassName="text-md text-muted-foreground font-semibold">
                {movie.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : new Date(movie.first_air_date).getFullYear()}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
