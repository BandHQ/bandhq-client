import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';

import Tag from './Tag';
import Button from './Button';

import { DELETE_ROLE } from '../graph/roles';

const Item = styled.div`
  border-bottom: solid 2px ${props => props.theme.colors.grey100};
  display: block;
  padding: ${props => props.theme.spacing.base};
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 0;
    font-size: ${props => props.theme.fontSizes.small};
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

const Role = ({ id, title, content, status }) => {
  const [handleDeleteRole, { loading }] = useMutation(DELETE_ROLE, {
    refetchQueries: ['Project'],
  });

  const handleDelete = () => {
    handleDeleteRole({
      variables: {
        id,
      },
    });
  };

  return (
    <Item>
      <div>
        <h4>{title}</h4>

        {content && <p>{content}</p>}

        <ul>
          <li>
            <Tag status={status} />
          </li>
        </ul>
      </div>

      <Button loading={loading} onClick={handleDelete} small>
        Delete
      </Button>
    </Item>
  );
};

Role.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  status: PropTypes.string.isRequired,
};

Role.defaultProps = {
  content: '',
};

export default Role;
