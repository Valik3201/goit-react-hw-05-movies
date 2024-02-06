import { axios, baseOptions } from './api';

const fetchTrendingData = async () => {
  try {
    const response = await axios.get(
      '/trending/movie/day?language=en-US',
      baseOptions
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchTrendingData };
