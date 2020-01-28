import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';

import FieldWrapper from './FieldWrapper';

import fieldBase from '../theme/fieldBase';

const Input = styled.input`
  ${fieldBase}

  ${props =>
    props.error &&
    `
    border-color: ${props.theme.colors.red500};
  `}
`;

const TextField = ({ name, hintText, type, disabled, readOnly, id, label }) => {
  return (
    <Field
      name={name}
      render={({ field, form: { errors, touched, submitCount } }) => {
        const errorMessage =
          ((touched && touched[field.name]) || submitCount > 0) &&
          errors &&
          errors[field.name];

        return (
          <FieldWrapper
            errorMessage={errorMessage}
            id={id}
            label={label}
            hintText={hintText}
          >
            <Input
              name={name}
              type={type}
              error={!!errorMessage}
              disabled={disabled}
              readOnly={readOnly}
              {...field}
              value={field.value}
            />
          </FieldWrapper>
        );
      }}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

TextField.defaultProps = {
  disabled: false,
  hintText: null,
  readOnly: false,
};

export default TextField;
