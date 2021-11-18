import { HeaderStyled } from './Header.styled';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Header };