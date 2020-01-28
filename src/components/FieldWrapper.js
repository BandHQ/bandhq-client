import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormControl = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
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

const FieldWrapper = ({ label, children, errorMessage, hintText, id }) => {
  return (
    <FormControl>
      <Label id={id} for={id}>
        {label}
      </Label>

      {children}

      {errorMessage && <ErrorMessage error>{errorMessage}</ErrorMessage>}

      {hintText && <HintText>{hintText}</HintText>}
    </FormControl>
  );
};

FieldWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FieldWrapper.defaultProps = {
  hintText: null,
  errorMessage: null,
};

export default FieldWrapper;
