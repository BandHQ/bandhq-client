import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserProjectListItem from './UserProjectListItem';

import isArrayWithLenth from '../utils/isArrayWithLenth';

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.white};
  margin: ${props => props.theme.spacing.large} 0;

  p {
    padding: ${props => props.theme.spacing.base};
    color: ${props => props.theme.colors.black50};
    text-align: center;
  }
`;

const UserProjectList = ({ projects }) => {
  if (!isArrayWithLenth(projects)) {
    return (
      <Wrapper>
        <p>
          You currently have no projects, click 'Add new project' to get
          started.
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {projects.map(project => (
        <UserProjectListItem key={project.id} {...project} />
      ))}
    </Wrapper>
  );
};

UserProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default UserProjectList;
