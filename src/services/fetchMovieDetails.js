import { axios, baseOptions } from './api';

/**
 * Fetches details for a given movie ID.
 * @async
 * @function fetchMovieDetails
 * @param {number} movie_id - The ID of the movie for which to fetch details.
 * @returns {Promise<Object>} A promise that resolves to an object containing movie details.
 */
const fetchMovieDetails = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}?language=en-US`,
    baseOptions
  );

  return data;
};

export { fetchMovieDetails };
