import { ContainerStyled } from './Container.styled';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export { Container };