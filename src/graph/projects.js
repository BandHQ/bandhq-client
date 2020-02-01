/**
 * @format
 * @flow
 */

import gql from 'graphql-tag';

const GET_USER_PROJECTS = gql`
  query Projects {
    user {
      id
      projects {
        id
        title
        content
        isPublic
        location
        city
        country
        status
      }
    }
  }
`;

const GET_PROJECT = gql`
  query Project($id: ID!) {
    project(id: $id) {
      id
      title
      content
      isPublic
      location
      city
      country
      status
    }
  }
`;

const CREATE_PROJECT = gql`
  mutation CreateProject(
    $title: String!
    $content: String!
    $isPublic: Boolean!
    $location: String!
    $city: String!
    $country: String!
    $status: String!
  ) {
    createProject(
      title: $title
      content: $content
      isPublic: $isPublic
      location: $location
      status: $status
      city: $city
      country: $country
    ) {
      id
      title
      content
      isPublic
      location
      city
      country
      status
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $id: ID!
    $title: String!
    $content: String!
    $isPublic: Boolean!
    $location: String!
    $city: String!
    $country: String!
    $status: String!
  ) {
    updateProject(
      id: $id
      title: $title
      content: $content
      isPublic: $isPublic
      location: $location
      city: $city
      country: $country
      status: $status
    ) {
      id
      title
      content
      isPublic
      location
      city
      country
      status
    }
  }
`;

export { GET_USER_PROJECTS, GET_PROJECT, CREATE_PROJECT, UPDATE_PROJECT };
