import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';

import FieldWrapper from './FieldWrapper';

const Wrapper = styled.div`
  margin-bottom: 2px;
  position: relative;
  transition: all ${props => props.theme.base.transitionSpeed}
    ${props => props.theme.easing.move};

  input {
    opacity: 0;
    left: -9999em;
    position: absolute;

    & + label:after {
      opacity: 0;
    }

    &:focus {
      + label:before {
        border-color: ${props => props.theme.colors.green500};
        background-color: ${props => props.theme.colors.white};
      }
    }

    &:checked {
      + label:before {
        background-color: ${props => props.theme.colors.green500};
      }
      + label:after {
        opacity: 1;
      }
    }
  }

  label {
    cursor: pointer;
    position: relative;
    padding-left: 30px;
    transition: all ${props => props.theme.base.transitionSpeed}
      ${props => props.theme.easing.move};

    &:before,
    &:after {
      position: absolute;
      transition: all ${props => props.theme.base.transitionSpeed}
        ${props => props.theme.easing.move};
    }

    &:before {
      content: '';
      display: inline-block;

      height: 20px;
      width: 20px;

      border: ${props => props.theme.colors.green500} solid 2px;
      background-color: white;

      left: 0;
    }

    &:after {
      content: '';
      display: block;
      height: 6px;
      width: 6px;
      background-color: ${props => props.theme.colors.white};
      border-radius: 100%;
      left: 7px;
      top: 6px;
    }

    &:hover {
      &:before {
        background-color: ${props => props.theme.colors.grey100};
      }
    }
  }
`;

const CheckboxField = ({ name, hintText, disabled, readOnly, id, label }) => {
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
            inline
          >
            <Wrapper>
              <input
                name={name}
                id={id}
                type="checkbox"
                error={!!errorMessage}
                disabled={disabled}
                readOnly={readOnly}
                {...field}
                checked={field.value}
              />

              <label htmlFor={name} />
            </Wrapper>
          </FieldWrapper>
        );
      }}
    />
  );
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

CheckboxField.defaultProps = {
  disabled: false,
  hintText: null,
  readOnly: false,
};

export default CheckboxField;
