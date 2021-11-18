import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const key = '98b2d661a291459629d67fe532d04a86';

const getMovies = async () => {
  try {
    const data = await axios.get(
      `${baseUrl}trending/movie/day?api_key=${key}&language=en-US`,
    );
    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const searchMovies = async query => {
  try {
    const data = await axios.get(
      `${baseUrl}search/movie?api_key=${key}&query=${query}&language=en-US`,
    );
    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovieDetails = async id => {
  try {
    const data = await axios.get(
      `${baseUrl}movie/${id}?api_key=${key}&language=en-US`,
    );
    const { poster_path, title, release_date, vote_average, overview, genres } =
      data.data;
    return { poster_path, title, release_date, vote_average, overview, genres };
  } catch (error) {
    console.log(error.message);
  }
};

const getMovieCast = async id => {
  try {
    const data = await axios.get(
      `${baseUrl}movie/${id}/credits?api_key=${key}&language=en-US`,
    );
    return data.data.cast;
  } catch (error) {
    console.log(error);
  }
};

const getMovieReviews = async id => {
  try {
    const data = await axios.get(
      `${baseUrl}movie/${id}/reviews?api_key=${key}&language=en-US`,
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export {
  getMovies,
  searchMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};