import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #2a363b;
  &.active,
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
