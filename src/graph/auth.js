/**
 * @format
 * @flow
 */

import gql from 'graphql-tag';

const GET_TOKEN = gql`
  query GetToken {
    token @client
  }
`;

const IS_AUTHENTICATED = gql`
  query IsAuthenticated {
    isAuthenticated @client
  }
`;

const CREATE_USER = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const LOGIN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export { GET_TOKEN, IS_AUTHENTICATED, CREATE_USER, LOGIN };
