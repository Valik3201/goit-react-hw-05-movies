import { axios, baseOptions } from './api';

const fetchMovieDetails = async movie_id => {
  try {
    const response = await axios.get(
      `/movie/${movie_id}?language=en-US`,
      baseOptions
    );
    console.debug(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchMovieDetails };
