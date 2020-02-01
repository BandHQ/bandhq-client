import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

import fieldBase from '../theme/fieldBase';

import parseGooglePlaceResult from '../utils/parseGooglePlaceResult';

const Input = styled.input`
  ${fieldBase}

  ${props =>
    props.error &&
    `
    border-color: ${props.theme.colors.red500};
  `}
`;

const InputWrapper = styled.div`
  position: relative;
`;

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: ${props => props.theme.colors.white};
  width: 100%;
`;

const DropdownInner = styled.div`
  cursor: pointer;
  padding: ${props => props.theme.spacing.xSmall} 14px;

  &:hover {
    background-color: ${props => props.theme.colors.black2};
  }

  ${props =>
    props.active &&
    `
    background-color: ${props.theme.colors.black2};
  `}
`;

const LocationFieldAutoComplete = ({
  name,
  setFieldValue,
  value,
  id,
  error,
}) => {
  const [addressValue, setAddress] = useState(value?.location || '');

  useEffect(() => {
    if (value?.location) {
      setAddress(value.location);
    }
  }, [value]);

  const handleSelect = async location => {
    try {
      const results = await geocodeByAddress(location);

      const { city, country } = parseGooglePlaceResult(results);

      setFieldValue(name, { location, city, country });
    } catch (e) {
      console.error('Error', e);
    }
  };

  return (
    <PlacesAutocomplete
      onSelect={handleSelect}
      onChange={setAddress}
      value={addressValue}
      searchOptions={{
        types: ['(cities)'],
      }}
    >
      {({ getInputProps, suggestions, loading, getSuggestionItemProps }) => (
        <InputWrapper>
          <Input
            error={error}
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
              name,
              id,
            })}
          />
          <DropdownContainer>
            {loading && <DropdownInner>Loading...</DropdownInner>}
            {suggestions.map(suggestion => {
              return (
                <DropdownInner
                  active={suggestion.active}
                  {...getSuggestionItemProps(suggestion)}
                >
                  {suggestion.description}
                </DropdownInner>
              );
            })}
          </DropdownContainer>
        </InputWrapper>
      )}
    </PlacesAutocomplete>
  );
};

LocationFieldAutoComplete.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  setFieldValue: PropTypes.func.isRequired,
  value: PropTypes.shape({
    location: PropTypes.string,
  }),
};

LocationFieldAutoComplete.defaultProps = {
  value: {},
  error: false,
};

export default LocationFieldAutoComplete;
