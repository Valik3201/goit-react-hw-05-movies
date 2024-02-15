import { axios, baseOptions } from './api';

/**
 * Fetches trending movie data for the current day.
 * @async
 * @function fetchTrendingData
 * @returns {Promise<Array>} A promise that resolves to an array of trending movie data.
 */
const fetchTrendingData = async () => {
  const { data } = await axios.get(
    '/trending/movie/day?language=en-US',
    baseOptions
  );

  return data.results;
};

export { fetchTrendingData };
