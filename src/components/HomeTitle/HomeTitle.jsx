import { Title } from './HomeTitle.styled';
import PropTypes from 'prop-types';

const HomeTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

HomeTitle.propTypes = {
  children: PropTypes.node,
};

export { HomeTitle };