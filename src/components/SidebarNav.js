import React from 'react';
import styled from 'styled-components';
import { useApolloClient } from '@apollo/react-hooks';
import { Link, navigate } from '@reach/router';

import { ReactComponent as UserIcon } from '../assets/user-icon.svg';
import { ReactComponent as MessageIcon } from '../assets/message-icon.svg';
import { ReactComponent as LogoutIcon } from '../assets/logout-icon.svg';
import { ReactComponent as CollaborateIcon } from '../assets/collaborate-icon.svg';
import { ReactComponent as ListIcon } from '../assets/list-icon.svg';
import { ReactComponent as CalendarIcon } from '../assets/calendar-icon.svg';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.white};
  margin: -10px -30px ${props => props.theme.spacing.midLarge};

  ${props =>
    props.theme.breakpoints.medium`
      width: 250px;
      flex: 0 0 250px;
      margin: 0;
  `}

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding: 0;
      margin: 0;
      border-bottom: solid 2px ${props => props.theme.colors.grey100};

      a,
      button {
        padding: ${props => props.theme.spacing.xSmall};
        display: flex;
        align-items: center;
        font-size: ${props => props.theme.fontSizes.small};
        font-family: ${props => props.theme.base.headingFontFamily};
        color: ${props => props.theme.colors.black};
        text-decoration: none;
        width: 100%;

        &:hover {
          background-color: ${props => props.theme.colors.black2};
        }
      }
    }
  }
`;

const Icon = styled.div`
  border-radius: 100%;
  background-color: ${props => props.theme.colors.grey100};
  padding: 10px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => props.theme.spacing.small};

  svg {
    width: 25px;
    height: 25px;
    fill: ${props => props.theme.colors.green500};
  }
`;

const SidebarNav = () => {
  const client = useApolloClient();

  const handleLogOut = async () => {
    await client.writeData({ data: { isAuthenticated: false } });
    client.clearStore();
    navigate('/');
  };

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/profile" small transparent>
            <Icon>
              <UserIcon />
            </Icon>

            <span>Profile</span>
          </Link>
        </li>

        <li>
          <Link to="/projects" small transparent>
            <Icon>
              <ListIcon />
            </Icon>

            <span>Projects</span>
          </Link>
        </li>

        <li>
          <Link to="/messages" small transparent>
            <Icon>
              <MessageIcon />
            </Icon>

            <span>Messages</span>
          </Link>
        </li>

        <li>
          <Link to="/collaborate" small transparent>
            <Icon>
              <CollaborateIcon />
            </Icon>

            <span>Collaborate</span>
          </Link>
        </li>

        <li>
          <Link to="/calendar" small transparent>
            <Icon>
              <CalendarIcon />
            </Icon>

            <span>Calendar</span>
          </Link>
        </li>

        <li>
          <button onClick={handleLogOut} small transparent type="button">
            <Icon>
              <LogoutIcon />
            </Icon>

            <span>Log out</span>
          </button>
        </li>
      </ul>
    </Nav>
  );
};

export default SidebarNav;
