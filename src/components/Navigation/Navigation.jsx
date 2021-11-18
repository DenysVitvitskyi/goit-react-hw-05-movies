import { Container } from '../Container/Container';
import { Item, List, NavlinkStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
      <List>
        <Item>
          <NavlinkStyled to="/" exact>
            Home
          </NavlinkStyled>
        </Item>
        <Item>
          <NavlinkStyled to="/movies">Movies</NavlinkStyled>
        </Item>
      </List>
    </Container>
  );
};

export { Navigation };