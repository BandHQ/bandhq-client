import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';

import FieldWrapper from './FieldWrapper';

import fieldBase from '../theme/fieldBase';

const Input = styled.textarea`
  ${fieldBase}
  resize: vertical;

  ${props =>
    props.error &&
    `
    border-color: ${props.theme.colors.red500};
  `}
`;

const TextAreaField = ({ name, hintText, disabled, readOnly, label, id }) => {
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
            name={name}
            label={label}
            hintText={hintText}
          >
            <Input
              name={name}
              error={!!errorMessage}
              disabled={disabled}
              readOnly={readOnly}
              rows="10"
              id={id}
              {...field}
            >
              {field.value}
            </Input>
          </FieldWrapper>
        );
      }}
    />
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

TextAreaField.defaultProps = {
  disabled: false,
  hintText: null,
  readOnly: false,
};

export default TextAreaField;
