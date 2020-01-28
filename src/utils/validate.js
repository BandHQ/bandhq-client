import * as yup from 'yup';

const validate = schema => yup.object().shape(schema);

const requiredString = yup
  .string('This field is required.')
  .required('This field is required.')
  .nullable();

const requiredNumber = yup
  .number('This field is required.')
  .required('This field is required.')
  .nullable();

export { validate, requiredString, requiredNumber };
