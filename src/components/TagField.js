import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';
import ReactTags from 'react-tag-autocomplete';

import FieldWrapper from './FieldWrapper';

import fieldBase from '../theme/fieldBase';
import tagBase from '../theme/tagBase';

const Input = styled.div`
  position: relative;

  input {
    ${fieldBase}
    display: block;
    width: 100% !important;

    ${props =>
      props.error &&
      `
    border-color: ${props.theme.colors.red500};
  `}
  }

  .react-tags__selected-tag {
    ${tagBase}
    margin-right: ${props => props.theme.spacing.xxSmall};

    &:hover {
      background-color: ${props => props.theme.colors.black10};
    }
  }

  .react-tags__selected {
    margin-bottom: ${props => props.theme.spacing.xxSmall};
  }

  .react-tags__suggestions {
    position: absolute;
    z-index: 10;
    background-color: ${props => props.theme.colors.white};
    width: 100%;

    li  {
      cursor: pointer;
      padding: ${props => props.theme.spacing.xSmall} 14px;

      &:hover {
        background-color: ${props => props.theme.colors.black2};
      }

      mark {
        background-color: ${props => props.theme.colors.yellow500};
      }
    }
  }
`;

const TagField = ({
  name,
  hintText,
  disabled,
  readOnly,
  label,
  suggestions,
}) => {
  return (
    <Field
      name={name}
      render={({
        field,
        form: { errors, touched, submitCount, setFieldValue },
      }) => {
        const errorMessage =
          ((touched && touched[field.name]) || submitCount > 0) &&
          errors &&
          errors[field.name];

        const handleDelete = i => {
          const tags = field.value.slice(0);
          tags.splice(i, 1);

          setFieldValue(name, tags);
        };

        const handleAddition = tag => {
          setFieldValue(name, [...field.value, tag]);
        };

        return (
          <FieldWrapper
            errorMessage={errorMessage}
            name={name}
            label={label}
            hintText={hintText}
          >
            <Input
              error={!!errorMessage}
              disabled={disabled}
              readOnly={readOnly}
            >
              <ReactTags
                tags={field.value}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                allowNew
                placeholder="Type tag and press enter"
              />
            </Input>
          </FieldWrapper>
        );
      }}
    />
  );
};

TagField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  suggestions: PropTypes.arrayOf(PropTypes.string.isRequired),
};

TagField.defaultProps = {
  disabled: false,
  hintText: null,
  readOnly: false,
  suggestions: [],
};

export default TagField;
