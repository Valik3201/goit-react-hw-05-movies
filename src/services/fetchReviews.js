import { axios, baseOptions } from './api';

/**
 * Fetches reviews for a given movie ID.
 * @async
 * @function fetchReviews
 * @param {number} movie_id - The ID of the movie for which to fetch reviews.
 * @returns {Promise<Array>} A promise that resolves to an array of review objects.
 */
const fetchReviews = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/reviews?language=en-US`,
    baseOptions
  );

  return data.results;
};

export { fetchReviews };
