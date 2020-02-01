import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import LayoutUser from '../components/LayoutUser';
import Form from '../components/Form';

import { GET_PROJECT, UPDATE_PROJECT, CREATE_PROJECT } from '../graph/projects';

import { validate, requiredString } from '../utils/validate';
import flattenToArrayOfStrings from '../utils/flattenToArrayOfStrings';
import nestToObjectWithName from '../utils/nestToObjectWithName';

import { genres, statuses } from '../config/values';

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
    options: statuses,
    hintText: 'Let potential band memebers know the current state of the band',
  },

  {
    id: 'links',
    type: 'links',
    name: 'links',
    label: 'Links to music',
    hintText:
      'Enter some links to your music e.g. SoundCloud, BandCamp or Spotify',
  },

  {
    id: 'genres',
    type: 'tag',
    name: 'genres',
    label: 'Genre tags',
    hintText: 'Tag any genres that are relevant to your project',
    suggestions: genres,
  },

  {
    id: 'artists',
    type: 'tag',
    name: 'artists',
    label: 'Similar artist tags',
    hintText: 'Tag any artists that are similar to your project',
  },
];

const projectFormValidationSchema = validate({
  title: requiredString,
  content: requiredString,
  location: requiredString,
  status: requiredString,
});

const projectTransformer = ({
  __typename,
  location,
  genres,
  artists,
  links,
  ...data
}) => {
  return {
    variables: {
      ...location,
      ...data,
      genres: flattenToArrayOfStrings(genres),
      artists: flattenToArrayOfStrings(artists),
      links: flattenToArrayOfStrings(links),
    },
  };
};

const EditProject = ({ id }) => {
  const { data, loading: fetching } = useQuery(GET_PROJECT, {
    variables: { id },
    skip: !id,
  });

  const initialValues = id
    ? {
        ...data?.project,
        location: {
          location: data?.project?.location,
        },
        genres: nestToObjectWithName(data?.project?.genres),
        artists: nestToObjectWithName(data?.project?.artists),
        links: nestToObjectWithName(data?.project?.links),
      }
    : {
        title: '',
        content: '',
        isPublic: true,
        status: '',
        genres: [],
        artists: [],
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

      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'UA-156805282-1',
          event_category: 'newproject',
          event_label: 'newproject',
        });
      }

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
