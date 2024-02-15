import { axios, baseOptions } from './api';

/**
 * Searches for movies based on the provided query parameters.
 * @async
 * @function searchMovies
 * @param {Object} queryParams - Object containing search query parameters.
 * @param {string} queryParams.query - The search query string.
 * @param {boolean} [queryParams.include_adult=false] - Flag to include adult content in search results. Default is false.
 * @param {string} [queryParams.language='en-US'] - The language for the search results. Default is 'en-US'.
 * @param {number} [queryParams.primary_release_year=''] - The primary release year of the movies to search for.
 * @param {number} [queryParams.page=1] - The page number of the search results. Default is 1.
 * @param {string} [queryParams.region=''] - The region for the search results.
 * @param {number} [queryParams.year=''] - The year of the movies to search for.
 * @returns {Promise<Array>} A promise that resolves to an array of movie search results.
 */
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

  const { data } = await axios.get('/search/movie', options);
  return data.results;
};

export { searchMovies };
