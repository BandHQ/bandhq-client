import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import LayoutUser from '../components/LayoutUser';
import Form from '../components/Form';

import { UPDATE_USER, GET_USER } from '../graph/auth';

import { validate, requiredString } from '../utils/validate';

const profileFormFields = [
  {
    id: 'name',
    type: 'text',
    name: 'name',
    label: 'Name',
  },
];

const profileFormValidationSchema = validate({
  name: requiredString,
});

const Profile = () => {
  const {
    data: { user },
    loading: fetching,
  } = useQuery(GET_USER, { fetchPolicy: 'cache-only' });

  const [handleProfileUpdate, { loading, error, called }] = useMutation(
    UPDATE_USER,
  );

  return (
    <LayoutUser title="Profile" fetching={fetching}>
      <Form
        legend="Update your profile"
        fields={profileFormFields}
        onSubmit={handleProfileUpdate}
        validationSchema={profileFormValidationSchema}
        initialValues={user}
        loading={loading}
        error={!!error}
        errorMessage="There has been a problem updating your profile"
        success={!!(!error && called)}
        successMessage="Profile updated successfully"
        submitButtonText="Update"
        container
      />
    </LayoutUser>
  );
};

export default Profile;
