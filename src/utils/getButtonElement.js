import { Link } from '@reach/router';

const getButtonElement = props => {
  if (props.href) return 'a';
  if (props.to) return Link;
  return 'button';
};

export default getButtonElement;
