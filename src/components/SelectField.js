import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';

import FieldWrapper from './FieldWrapper';

import fieldBase from '../theme/fieldBase';

const SelectWrapper = styled.div`
  ${fieldBase}
  position: relative;

  ${props =>
    props.error &&
    `
    border-color: ${props.theme.colors.red500};
  `}

  select {
    cursor: pointer;
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
`;

const SelectField = ({
  name,
  hintText,
  disabled,
  readOnly,
  id,
  label,
  defaultLabel,
  options,
}) => {
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
            <SelectWrapper error={!!errorMessage}>
              {field.value || defaultLabel}
              <select
                name={name}
                disabled={disabled}
                readOnly={readOnly}
                {...field}
                id={id}
                value={field.value}
              >
                <option value="">{defaultLabel}</option>

                {options.map(option => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </SelectWrapper>
          </FieldWrapper>
        );
      }}
    />
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  defaultLabel: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

SelectField.defaultProps = {
  disabled: false,
  hintText: null,
  readOnly: false,
};

export default SelectField;
