import { axios, baseOptions } from './api';

const searchMovies = async query => {
  const options = {
    ...baseOptions,
    params: {
      include_adult: false,
      language: 'en-US',
      page: 1,
      query: query,
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
