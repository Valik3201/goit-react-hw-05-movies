import axios from 'axios';

/**
 * Axios instance for making HTTP requests.
 * @namespace axios
 * @property {Object} defaults - Default configuration for axios.
 * @property {string} defaults.baseURL - The base URL for all requests.
 */
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

/**
 * Default options for axios requests.
 * @namespace baseOptions
 * @property {Object} headers - Headers to be included in the requests.
 * @property {string} headers.accept - Specifies the desired content type for the response.
 * @property {string} headers.Authorization - Authorization token for accessing the API.
 */
const baseOptions = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMyZWM5MzExODExYjA2NDkyNzhmZGFmYzEyMzAwZSIsInN1YiI6IjY1YzIwN2U2ZjQ0ZjI3MDE2M2MwYzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zkFtcEcge5gUigfN2sq7K5C-DaNfEfDz1qyoSucACIQ',
  },
};

export { axios, baseOptions };
