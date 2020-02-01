const flattenToArrayOfStrings = array => {
  if (!array || !array.length) return [];

  return array.map(item => item.name);
};

export default flattenToArrayOfStrings;
