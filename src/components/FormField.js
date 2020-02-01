import React from 'react';
import PropTypes from 'prop-types';

import TextField from './TextField';
import TextAreaField from './TextAreaField';
import CheckboxField from './CheckboxField';
import SelectField from './SelectField';
import LocationField from './LocationField';

const FormField = ({ type, ...props }) => {
  if (type === 'text' || type === 'password') {
    return <TextField type={type} {...props} />;
  }

  if (type === 'textarea') {
    return <TextAreaField {...props} />;
  }

  if (type === 'checkbox') {
    return <CheckboxField {...props} />;
  }

  if (type === 'select') {
    return <SelectField {...props} />;
  }

  if (type === 'location') {
    return <LocationField {...props} />;
  }

  return <TextField type={type} {...props} />;
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FormField;
