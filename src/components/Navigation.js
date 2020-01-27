import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import Button from './Button';

import { IS_AUTHENTICATED } from '../graph/auth';

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding: 0 ${props => props.theme.spacing.xxSmall};
      margin: 0;

      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

const Navigation = () => {
  const {
    data: { isAuthenticated },
  } = useQuery(IS_AUTHENTICATED);

  if (!isAuthenticated) {
    return (
      <Nav>
        <ul>
          <li>
            <Button to="/find-a-band" small transparent>
              Find a band
            </Button>
          </li>

          <li>
            <Button to="/sign-up" small transparent>
              Log in
            </Button>
          </li>

          <li>
            <Button to="/sign-up" small>
              Sign up
            </Button>
          </li>
        </ul>
      </Nav>
    );
  }

  return (
    <Nav>
      <ul>
        <li>
          <Button to="/find-a-band" small transparent>
            Find a band
          </Button>
        </li>

        <li>
          <Button to="/sign-up" small transparent>
            Log in
          </Button>
        </li>

        <li>
          <Button to="/sign-up" small>
            Sign up
          </Button>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
