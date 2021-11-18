import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  padding-left: 35px;
  list-style: none;
  display: flex;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

const NavlinkStyled = styled(NavLink)`
  color: black;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  &.active {
    color: pink;
  }
`;

export { NavlinkStyled, List, Item };