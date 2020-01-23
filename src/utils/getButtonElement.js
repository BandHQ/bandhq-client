const getButtonElement = (props) => {
  if (props.href) return 'a';
  return 'button';
};

export default getButtonElement;
