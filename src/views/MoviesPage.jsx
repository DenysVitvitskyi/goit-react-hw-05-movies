import { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Container } from '../components/Container/Container';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { MoviesPageWrapper } from '../components/MoviesPage/MoviesPageWrapper';
import { Form } from '../components/MoviesPage/Form/Form';
import { searchMovies } from '../api/fetchMovies';

const MoviesPage = ({ setStatus, status }) => {
  const location = useLocation();
  const history = useHistory();
  const locationRef = useRef(location);

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => {
    return new URLSearchParams(location.search).get('query') ?? '';
  });

//   console.log();

  const handleQuery = query => {
    setQuery(query);
  };

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    if (query.length < 1) {
      return;
    }
    history.push({ ...locationRef.current, search: `query=${query}` });
  }, [query, history]);

  useEffect(() => {
    if (query.length < 1) {
      return;
    }
    searchMovies(query).then(data => {
      setStatus('pending');
      if (data.length === 0) {
        toast.error('There are no films for this request');
      }
      setMovies(data);
      setStatus('resolved');
    });
  }, [query, setStatus]);

  return (
    <MoviesPageWrapper>
      <Container>
        <Form handleQuery={handleQuery} />
        {status === 'resolved' && <MoviesList movies={movies} />}
      </Container>
    </MoviesPageWrapper>
  );
};

MoviesPage.propTypes = {
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default MoviesPage;