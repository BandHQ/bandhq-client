import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import FieldWrapper from './FieldWrapper';
import LocationFieldAutoComplete from './LocationFieldAutoComplete';

const LocationField = ({ name, hintText, label, id }) => {
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

        return (
          <FieldWrapper
            errorMessage={errorMessage}
            name={name}
            label={label}
            hintText={hintText}
          >
            <LocationFieldAutoComplete
              error={!!errorMessage}
              value={field.value}
              setFieldValue={setFieldValue}
              name={name}
              id={id}
            />
          </FieldWrapper>
        );
      }}
    />
  );
};

LocationField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
};

LocationField.defaultProps = {
  hintText: null,
};

export default LocationField;
