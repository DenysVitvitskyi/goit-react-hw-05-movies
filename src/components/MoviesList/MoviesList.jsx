import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, LinkStyled } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    movies && (
      <List>
        {movies.map(({ id, name, title }) => (
          <Item key={id}>
            <LinkStyled
              to={{ pathname: `/movies/${id}`, state: { from: location } }}
            >
              {name ?? title}
            </LinkStyled>
          </Item>
        ))}
      </List>
    )
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export { MoviesList };