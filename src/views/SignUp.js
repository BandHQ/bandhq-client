import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { navigate, Link } from '@reach/router';

import LayoutAuth from '../components/LayoutAuth';
import Form from '../components/Form';

import { CREATE_USER, GET_TOKEN } from '../graph/auth';

import { validate, requiredString } from '../utils/validate';
import addToMailChimpList from '../utils/addToMailChimpList';

const signUpFormFields = [
  {
    id: 'name',
    type: 'text',
    name: 'name',
    label: 'Name',
  },

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

const signUpFormValidationSchema = validate({
  name: requiredString,
  email: requiredString,
  password: requiredString,
});

const signUpFormInitialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const client = useApolloClient();
  const [handleSignUp, { loading, error }] = useMutation(CREATE_USER, {
    onCompleted(response) {
      if (!response?.signup) return;

      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'UA-156805282-1',
          event_category: 'signup',
          event_label: 'signup',
        });
      }

      client.writeData({
        data: {
          isAuthenticated: true,
        },
      });

      client.writeQuery({
        query: GET_TOKEN,
        data: response?.signup,
      });

      navigate('/profile');

      addToMailChimpList(response?.signup);
    },
  });

  const renderLoginLink = () => {
    return (
      <>
        <p>
          {' '}
          By signing up to BandHQ you agree to our{' '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <p>
          Already have an BandHQ account? <Link to="/login">Login here</Link>.
        </p>
      </>
    );
  };

  return (
    <LayoutAuth
      title="Sign up to BandHQ"
      description="BandHQ is an app where you can find a band, connect with musicians, collaborate on new tracks and keep track of your band’s events."
    >
      <Form
        legend="Sign up to BandHQ"
        fields={signUpFormFields}
        onSubmit={handleSignUp}
        validationSchema={signUpFormValidationSchema}
        initialValues={signUpFormInitialValues}
        loading={loading}
        error={!!error}
        errorMessage="There has been a problem creating your account, if you already have an account please login."
        submitButtonText="Sign up"
        renderAfterFields={renderLoginLink}
        fullWidthButton
      />
    </LayoutAuth>
  );
};

export default SignUp;
