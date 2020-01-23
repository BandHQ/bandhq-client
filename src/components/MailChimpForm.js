import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import fieldBase from '../theme/fieldBase';

import Button from './Button';

const Input = styled.input`
  ${fieldBase}
  background-color: ${props => props.theme.colors.white5};
  border-color: ${props => props.theme.colors.white50};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.base};

  &::placeholder {
    color: ${props => props.theme.colors.white50};
  }

  ${props => props.theme.breakpoints.small`
    max-width: 340px;
    margin-right: ${props.theme.spacing.base};
    margin-bottom: 0;
  `}
`;

const Form = styled.form`
  margin-top: ${props => props.theme.spacing.large};

  ${props => props.theme.breakpoints.small`
    display: flex;
  `}

  button {
    width: 100%;

    ${props => props.theme.breakpoints.small`
      width: auto;
    `}
  }
`;

const Message = styled.p`
  color: ${props => props.theme.colors.white};
  margin-top: ${props => props.theme.spacing.base};
`;

const MailChimpForm = ({ subscribe, status, message }) => {
  const handleFormSubmit = ({ email }) => {
    if (!email) return;

    subscribe({ EMAIL: email });
  };

  return (
    <>
      <Formik onSubmit={handleFormSubmit} initialValues={{ email: '' }}>
        {({ values, handleChange, handleSubmit }) => (
          <Form id="sign-up" onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
              value={values.email}
            />

            <Button type="submit">sign up for eary access</Button>
          </Form>
        )}
      </Formik>

      {status === 'sending' && <Message>Sending...</Message>}

      {status === 'error' && (
        <Message dangerouslySetInnerHTML={{ __html: message }} />
      )}

      {status === 'success' && (
        <Message>
          Thank you for signing up. We'll keep you in the loop with BandHQ news.
        </Message>
      )}
    </>
  );
};

MailChimpForm.propTypes = {
  subscribe: PropTypes.func.isRequired,
  status: PropTypes.node.isRequired,
  message: PropTypes.node.isRequired,
};

export default MailChimpForm;
