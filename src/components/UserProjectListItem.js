import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import PublicStatusIcon from './PublicStatusIcon';
import Tag from './Tag';

const Item = styled.div`
  border-bottom: solid 2px ${props => props.theme.colors.grey100};

  a {
    display: block;
    padding: ${props => props.theme.spacing.base};
    text-decoration: none;

    &:hover {
      background-color: ${props => props.theme.colors.black2};
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: ${props => props.theme.colors.grey500};
      padding: 0;
      margin-right: ${props => props.theme.spacing.small};
      line-height: 1;
    }
  }
`;

const UserProjectListItem = ({ id, title, location, isPublic, status }) => {
  return (
    <Item>
      <Link to={`/projects/${id}`}>
        <h4>{title}</h4>

        <ul>
          <li>
            <PublicStatusIcon isPublic={isPublic} />
          </li>
          <li>
            <Tag status={status} />
          </li>
          <li>{location}</li>
        </ul>
      </Link>
    </Item>
  );
};

UserProjectListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
};

export default UserProjectListItem;
