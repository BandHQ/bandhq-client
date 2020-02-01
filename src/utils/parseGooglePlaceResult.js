const parseGooglePlaceResult = results => {
  if (!results || !results[0]) return { city: null, country: null };

  const city = results[0].address_components.find(({ types }) =>
    types.includes('locality'),
  );

  const country = results[0].address_components.find(({ types }) =>
    types.includes('country'),
  );

  return {
    city: (city && city.long_name) || null,
    country: (country && country.long_name) || null,
  };
};

export default parseGooglePlaceResult;
