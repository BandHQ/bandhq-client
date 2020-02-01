import React from 'react';
import PropTypes from 'prop-types';

import TextField from './TextField';
import TextAreaField from './TextAreaField';
import CheckboxField from './CheckboxField';
import SelectField from './SelectField';
import LocationField from './LocationField';
import TagField from './TagField';
import LinkField from './LinkField';

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

  if (type === 'tag') {
    return <TagField {...props} />;
  }

  if (type === 'links') {
    return <LinkField {...props} />;
  }

  return <TextField type={type} {...props} />;
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FormField;
