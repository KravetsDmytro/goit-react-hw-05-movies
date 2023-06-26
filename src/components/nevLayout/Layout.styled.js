import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
position: sticky;
top: 0;
left: 0;
z-index: 100;
display: flex;
align-items: center;
height: 50px;
padding-left: 25px;
background-color: #d0d600;
`;

export const Link = styled(NavLink)`
  padding: 0 0px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #fff;
  position: relative;
  z-index: 20;

  transition: color 150ms linear;

  &:nth-of-type(2) {
    margin-left: 34px;
  }

  &:hover,
  &:focus {
    color: #42362b;
  }

  &.active {
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      display: block;
      z-index: -1;
      width: 100%;
      height: 45px;
      background-color: #9e732d;
      border-radius: 4px;

      left: 0;
      bottom: -8px;

      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }
`;
