import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { navigate, Link } from '@reach/router';

import LayoutAuth from '../components/LayoutAuth';
import Form from '../components/Form';

import { LOGIN, GET_TOKEN } from '../graph/auth';

import { validate, requiredString } from '../utils/validate';

const loginFormFields = [
  {
    id: 'email',
    type: 'email',
    name: 'email',
    label: 'Email Address',
  },

  {
    id: 'password',
    type: 'password',
    name: 'password',
    label: 'Password',
  },
];

const loginFormValidationSchema = validate({
  email: requiredString,
  password: requiredString,
});

const loginFormInitialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const client = useApolloClient();
  const [handleLogin, { loading, error }] = useMutation(LOGIN, {
    onCompleted(response) {
      if (!response?.login) return;

      client.writeData({
        data: {
          isAuthenticated: true,
        },
      });

      client.writeQuery({
        query: GET_TOKEN,
        data: response?.login,
      });

      navigate('/profile');
    },
  });

  const renderSignupLink = () => {
    return (
      <p>
        Don't have an account with BandHQ?
        <br />
        <Link to="/sign-up">Sign up for free</Link>.
      </p>
    );
  };

  return (
    <LayoutAuth
      title="Login to BandHQ"
      description="BandHQ is an app where you can find a band, connect with musicians, collaborate on new tracks and keep track of your band’s events."
    >
      <Form
        legend="Login to BandHQ"
        fields={loginFormFields}
        onSubmit={handleLogin}
        validationSchema={loginFormValidationSchema}
        initialValues={loginFormInitialValues}
        loading={loading}
        error={!!error}
        errorMessage="Invalid email address or password"
        submitButtonText="Login"
        fullWidthButton
        container
        renderAfterFields={renderSignupLink}
      />
    </LayoutAuth>
  );
};

export default Login;
