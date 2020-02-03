import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';

import Form from './Form';
import Role from './Role';

import { validate, requiredString } from '../utils/validate';

import { CREATE_ROLE } from '../graph/roles';

import { roleTypes, roleStatuses } from '../config/values';

const roleFormFields = [
  {
    id: 'roleTitle',
    type: 'select',
    name: 'roleTitle',
    label: 'Role type',
    options: roleTypes,
    defaultLabel: 'Select a type',
    hintText:
      'Choose the type of roll for this project e.g. vocalist or guitarist',
  },
  {
    id: 'roleContent',
    type: 'text',
    name: 'roleContent',
    label: 'Additional information',
    hintText:
      "Let people know what you're looking for in this role e.g. playing style",
  },
  {
    id: 'roleStatus',
    type: 'select',
    name: 'roleStatus',
    label: 'Role status',
    defaultLabel: 'Select a status',
    hintText:
      'E.g. has this role already been filled or are you looking to find someone',
    options: roleStatuses,
  },
];

const roleFormValidationSchema = validate({
  roleTitle: requiredString,
  roleStatus: requiredString,
});

const initialValues = {
  roleTitle: '',
  roleContent: '',
  roleStatus: '',
};

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.large} 0;
`;

const RoleContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin: ${props => props.theme.spacing.large} 0;

  & > p {
    padding: ${props => props.theme.spacing.base};
    margin: 0;
  }
`;

const RoleForm = ({ projectId, disabled, roles }) => {
  const [
    handleRoleCreate,
    { loading, error, called },
  ] = useMutation(CREATE_ROLE, { refetchQueries: ['Project'] });

  const roleTransformer = ({
    __typename,
    roleTitle,
    roleStatus,
    roleContent,
    ...data
  }) => {
    return {
      variables: {
        ...data,
        title: roleTitle,
        status: roleStatus,
        content: roleContent,
        projectId,
      },
    };
  };

  return (
    <Wrapper id="roles">
      <h1>Project Roles</h1>
      <p>
        Let people know your dream lineup, can be a combination of current and
        required band members.
      </p>

      <RoleContainer>
        {roles && roles.length ? (
          roles.map(role => <Role {...role} />)
        ) : (
          <p>You haven't added any roles to this project yet.</p>
        )}
      </RoleContainer>

      {disabled ? (
        <p>Please create your project before adding project roles</p>
      ) : (
        <Form
          legend="Add new project role"
          fields={roleFormFields}
          onSubmit={handleRoleCreate}
          validationSchema={roleFormValidationSchema}
          initialValues={initialValues}
          dataTransformer={roleTransformer}
          loading={loading}
          error={!!error}
          errorMessage="Unable to create role"
          success={!!(!error && called)}
          successMessage="Role created successfully"
          submitButtonText="Create role"
          container
          disabled={disabled}
        />
      )}
    </Wrapper>
  );
};

RoleForm.propTypes = {
  projectId: PropTypes.string,
  disabled: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.shape({})),
};

RoleForm.defaultProps = {
  projectId: null,
  disabled: true,
  roles: null,
};

export default RoleForm;
