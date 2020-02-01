import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormControl = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const Field = styled.div`
  ${props =>
    props.inline &&
    `
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    
  `}
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xxSmall};
`;

const ErrorMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.xSmall};
  padding: ${props => props.theme.spacing.xxSmall} 0;
  margin: 0;
  color: ${props => props.theme.colors.red500};
`;

const HintText = styled.p`
  font-size: ${props => props.theme.fontSizes.xSmall};
  padding: ${props => props.theme.spacing.xxSmall} 0;
  margin: 0;
  color: ${props => props.theme.colors.black50};
`;

const FieldWrapper = ({
  label,
  children,
  errorMessage,
  hintText,
  name,
  inline,
}) => {
  return (
    <FormControl inline={inline}>
      <Field inline={inline}>
        <Label htmlFor={name}>{label}</Label>

        {children}
      </Field>

      {errorMessage && <ErrorMessage error>{errorMessage}</ErrorMessage>}

      {hintText && <HintText>{hintText}</HintText>}
    </FormControl>
  );
};

FieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

FieldWrapper.defaultProps = {
  hintText: null,
  errorMessage: null,
  inline: false,
};

export default FieldWrapper;
