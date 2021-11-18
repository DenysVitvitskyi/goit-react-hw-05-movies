import { Wrapper } from './MoviesPageWrapper.styled';
import PropTypes from 'prop-types';

const MoviesPageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MoviesPageWrapper.propTypes = {
  children: PropTypes.node,
};

export { MoviesPageWrapper };