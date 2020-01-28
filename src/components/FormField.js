import React from 'react';
import PropTypes from 'prop-types';

import TextField from './TextField';

const FormField = ({ type, ...props }) => {
  if (type === 'text' || type === 'password') {
    return <TextField type={type} {...props} />;
  }

  return <TextField type={type} {...props} />;
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FormField;
