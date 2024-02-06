import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const searchMovies = async query => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMyZWM5MzExODExYjA2NDkyNzhmZGFmYzEyMzAwZSIsInN1YiI6IjY1YzIwN2U2ZjQ0ZjI3MDE2M2MwYzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zkFtcEcge5gUigfN2sq7K5C-DaNfEfDz1qyoSucACIQ',
    },
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
