import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import LayoutUser from '../components/LayoutUser';
import UserProjectList from '../components/UserProjectList';

import { GET_USER_PROJECTS } from '../graph/projects';

const Projects = () => {
  const {
    data: { user },
    loading: fetching,
  } = useQuery(GET_USER_PROJECTS);

  return (
    <LayoutUser title="Projects" fetching={fetching}>
      <p>
        Here you can create your projects (bands), add which members you're
        looking for and tag the project with genres and similar artists so other
        musicians can easily find your project.
      </p>

      <UserProjectList projects={user?.projects} />
    </LayoutUser>
  );
};

export default Projects;
