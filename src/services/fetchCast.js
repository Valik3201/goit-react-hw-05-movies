import { axios, baseOptions } from './api';

const fetchCast = async movie_id => {
  try {
    const response = await axios.get(
      `/movie/${movie_id}/credits?language=en-US`,
      baseOptions
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchCast };
