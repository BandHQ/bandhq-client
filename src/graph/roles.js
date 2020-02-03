/**
 * @format
 * @flow
 */

import gql from 'graphql-tag';

const CREATE_ROLE = gql`
  mutation CreateRole(
    $title: String!
    $content: String
    $status: String!
    $projectId: ID!
  ) {
    createRole(
      title: $title
      content: $content
      status: $status
      projectId: $projectId
    ) {
      id
      title
      content
      status
    }
  }
`;

const DELETE_ROLE = gql`
  mutation DeleteRole($id: ID!) {
    deleteRole(id: $id) {
      id
    }
  }
`;

export { CREATE_ROLE, DELETE_ROLE };
