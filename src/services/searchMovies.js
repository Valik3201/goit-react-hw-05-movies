import { axios, baseOptions } from './api';

const searchMovies = async queryParams => {
  const options = {
    ...baseOptions,
    params: {
      query: queryParams.query,
      include_adult: queryParams.include_adult || false,
      language: queryParams.language || 'en-US',
      primary_release_year: queryParams.primary_release_year || '',
      page: queryParams.page || 1,
      region: queryParams.region || '',
      year: queryParams.year || '',
    },
  };

  try {
    const response = await axios.get('/search/movie', options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { searchMovies };
