import { axios, baseOptions } from './api';

/**
 * Fetches the cast details for a given movie ID.
 * @async
 * @function fetchCast
 * @param {number} movie_id - The ID of the movie for which to fetch the cast.
 * @returns {Promise<Array>} A promise that resolves to an array of cast members.
 */
const fetchCast = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/credits?language=en-US`,
    baseOptions
  );

  return data.cast;
};

export { fetchCast };
