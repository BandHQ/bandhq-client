import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import LayoutUser from '../components/LayoutUser';
import Form from '../components/Form';

import { GET_PROJECT, UPDATE_PROJECT, CREATE_PROJECT } from '../graph/projects';

import { validate, requiredString } from '../utils/validate';

const projectFormFields = [
  {
    id: 'title',
    type: 'text',
    name: 'title',
    label: 'Title',
    hintText: "E.g. 'New London Post-Punk Band looking for Members.'",
  },
  {
    id: 'content',
    type: 'textarea',
    name: 'content',
    label: 'Content',
    hintText: 'Tell people a little more about your project',
  },
  {
    id: 'isPublic',
    type: 'checkbox',
    name: 'isPublic',
    label: 'Public project',
    hintText:
      'Public projects can be viewed by everyone, if you want want to find band members, unselect this.',
  },
  {
    id: 'location',
    type: 'location',
    name: 'location',
    label: 'Location',
    hintText: 'Your closest town, city or cultural hub',
  },
  {
    id: 'status',
    type: 'select',
    name: 'status',
    label: 'Project status',
    defaultLabel: 'Select a status',
    options: [
      { id: '1', value: 'Concept' },
      { id: '2', value: 'New band' },
      { id: '3', value: 'Established act' },
    ],
    hintText: 'Let potential band memebers know the current state of the band',
  },
];

const projectFormValidationSchema = validate({
  title: requiredString,
  content: requiredString,
  location: requiredString,
  status: requiredString,
});

const projectTransformer = ({ __typename, location, ...data }) => {
  return {
    variables: {
      ...location,
      ...data,
    },
  };
};

const EditProject = ({ id }) => {
  const { data, loading: fetching } = useQuery(GET_PROJECT, {
    variables: { id },
    skip: !id,
  });

  const initialValues = id
    ? { ...data?.project, location: { location: data?.project?.location } }
    : {
        title: '',
        content: '',
        isPublic: true,
      };

  const [
    handleProjectUpdate,
    { loading: loadingUpdate, error: errorUpdate, called: calledUpdate },
  ] = useMutation(UPDATE_PROJECT);

  const [
    handleProjectCreate,
    { loading: loadingNew, error: errorNew, called: calledNew },
  ] = useMutation(CREATE_PROJECT, {
    onCompleted(response) {
      if (!response?.createProject?.id) return;
      navigate('/projects');
    },
  });

  return (
    <LayoutUser title={id ? 'Edit Project' : 'New Project'} fetching={fetching}>
      <Form
        legend={id ? 'Update  project details' : 'Create your new projedct'}
        fields={projectFormFields}
        onSubmit={id ? handleProjectUpdate : handleProjectCreate}
        validationSchema={projectFormValidationSchema}
        initialValues={initialValues}
        dataTransformer={projectTransformer}
        loading={loadingUpdate || loadingNew}
        error={!!(errorUpdate || errorNew)}
        errorMessage={
          id
            ? 'There has been a problem updating your project'
            : 'Unable to create your project.'
        }
        success={!!(!(errorUpdate || errorNew) && (calledUpdate || calledNew))}
        successMessage={
          id ? 'Profile updated successfully' : 'Project created successfully.'
        }
        submitButtonText={id ? 'Update' : 'Add Project'}
        container
      />
    </LayoutUser>
  );
};

EditProject.propTypes = {
  id: PropTypes.string,
};

EditProject.defaultProps = {
  id: null,
};

export default EditProject;
