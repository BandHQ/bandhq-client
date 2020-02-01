const nestToObjectWithName = array => {
  if (!array || !array.length) return [];

  return array.map(item => ({ name: item }));
};

export default nestToObjectWithName;
