import { axios, baseOptions } from './api';

const fetchReviews = async movie_id => {
  try {
    const response = await axios.get(
      `/movie/${movie_id}/reviews?language=en-US`,
      baseOptions
    );
    console.debug(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchReviews };
