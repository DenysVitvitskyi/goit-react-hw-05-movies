import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Container } from '../components/Container/Container';
import { getMovies } from '../api/fetchMovies';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { HomeTitle } from '../components/HomeTitle/HomeTitle';

const HomePage = ({ setStatus, status }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setStatus('pending');
    getMovies()
      .then(setMovies)
      .then(() => {
        setStatus('resolved');
      });
  }, [setStatus]);

  return (
    <Container>
      <HomeTitle>Trending today</HomeTitle>
      {status === 'resolved' && <MoviesList movies={movies} />}
    </Container>
  );
};

HomePage.propTypes = {
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default HomePage;