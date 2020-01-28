import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import FormikErrorFocus from 'formik-error-focus';

import FormField from './FormField';
import Button from './Button';
import Notification from './Notification';

import isArrayWithLenth from '../utils/isArrayWithLenth';

const FormWrapper = styled.form`
  max-width: 460px;
`;

const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: ${props => props.theme.spacing.small};
`;

const Legend = styled.legend`
  font-size: ${props => props.theme.fontSizes.large};
  font-family: ${props => props.theme.base.headingFontFamily};
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.spacing.midLarge};
`;

const Form = ({
  fields,
  initialValues,
  onSubmit,
  validationSchema,
  dataTransformer,
  legend,
  submitButtonText,
  loading,
  fullWidthButton,
  error,
  errorMessage,
  success,
  successMessage,
  renderAfterFields,
  ...props
}) => {
  const formatAndSubmit = values => {
    if (!onSubmit) return;

    if (dataTransformer) {
      onSubmit(dataTransformer(values));
      return;
    }

    onSubmit({ variables: values });
  };

  return (
    <Formik
      enableReinitialize
      validateOnChange={false}
      initialValues={initialValues}
      onSubmit={formatAndSubmit}
      validationSchema={validationSchema && validationSchema}
      {...props}
      render={({ handleSubmit, values, errors }) => {
        return (
          <FormWrapper onSubmit={handleSubmit}>
            <FieldSet {...props}>
              {legend && <Legend>{legend}</Legend>}

              {isArrayWithLenth(fields) &&
                fields.map(field => (
                  <FormField
                    key={field.id}
                    values={values}
                    errors={errors}
                    {...props}
                    {...field}
                  />
                ))}

              {error && (
                <Notification type="error">{errorMessage}</Notification>
              )}

              {success && (
                <Notification type="success">{successMessage}</Notification>
              )}

              {renderAfterFields && renderAfterFields()}
            </FieldSet>

            <Button type="submit" loading={loading} fullWidth={fullWidthButton}>
              {submitButtonText}
            </Button>

            <FormikErrorFocus
              offset={-200}
              align="top"
              focusDelay={0}
              duration={1}
            />
          </FormWrapper>
        );
      }}
    />
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({})),
  initialValues: PropTypes.shape({}),
  onSubmit: PropTypes.func,
  validationSchema: PropTypes.shape({}),
  dataTransformer: PropTypes.func,
  legend: PropTypes.string,
  submitButtonText: PropTypes.string,
  loading: PropTypes.bool,
  fullWidthButton: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  renderAfterFields: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: undefined,
  initialValues: {},
  validationSchema: null,
  dataTransformer: undefined,
  legend: null,
  fields: null,
  submitButtonText: 'submit',
  loading: false,
  fullWidthButton: false,
  error: false,
  errorMessage: 'There has been a problem making your request',
  success: false,
  successMessage: 'Updated successfully',
  renderAfterFields: undefined,
};

export default memo(Form);
