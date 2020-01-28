import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import Button from './Button';

import { IS_AUTHENTICATED } from '../graph/auth';

import { ReactComponent as UserIcon } from '../assets/user-icon.svg';
import { ReactComponent as MessageIcon } from '../assets/message-icon.svg';

const Nav = styled.nav`
  flex: 1 1 auto;
  margin-left: ${props => props.theme.spacing.large};
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 0 ${props => props.theme.spacing.xxSmall};
  margin: 0;

  &:last-child {
    padding-right: 0;
  }


  ${props =>
    props.alignLeft &&
    `
    margin-left: auto;
  `}

  ${props =>
    props.hideOnMobile &&
    `
    display: none;
  `}

  ${props =>
    props.hideOnMobile &&
    props.theme.breakpoints.medium`
    display: block;
  `}
`;

const Navigation = () => {
  const {
    data: { isAuthenticated },
  } = useQuery(IS_AUTHENTICATED);

  if (!isAuthenticated) {
    return (
      <Nav>
        <Menu>
          <NavItem hideOnMobile>
            <Button to="/find-a-band" small transparent>
              Find a band
            </Button>
          </NavItem>

          <NavItem hideOnMobile>
            <Button to="/login" small transparent>
              Find band members
            </Button>
          </NavItem>

          <NavItem alignLeft>
            <Button to="/sign-up" small>
              Sign up
            </Button>
          </NavItem>

          <NavItem hideOnMobile>
            <Button to="/login" small transparent>
              Login
            </Button>
          </NavItem>
        </Menu>
      </Nav>
    );
  }

  return (
    <Nav>
      <Menu>
        <NavItem hideOnMobile>
          <Button to="/find-a-band" small transparent>
            Find a band
          </Button>
        </NavItem>

        <NavItem hideOnMobile>
          <Button to="/projects" small transparent>
            Find band members
          </Button>
        </NavItem>

        <NavItem alignLeft>
          <Button to="/messages" small icon transparent>
            <MessageIcon />
          </Button>
        </NavItem>

        <NavItem>
          <Button to="/profile" small icon transparent>
            <UserIcon />
          </Button>
        </NavItem>
      </Menu>
    </Nav>
  );
};

export default Navigation;
