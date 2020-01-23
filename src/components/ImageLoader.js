// Import Dependencies
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.figure`
  background-color: ${props => props.theme.colors.grey200};
  display: block;
  overflow: hidden;
  padding-bottom: ${(9 / 16) * 100}%;
  position: relative;
  width: 100%;
  z-index: 1;

  img {
    display: none;
  }
`;

const Background = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 2px;
  left: 2px;
  opacity: 0;
  position: absolute;
  right: 2px;
  top: 2px;
  transform: scale(1.1);
  transition: opacity ${props => props.theme.base.transitionSpeed}
      ${props => props.theme.easing.enter} 0s,
    transform ${props => props.theme.base.transitionSpeed}
      ${props => props.theme.easing.enter} 0s;

  ${props =>
    props.isLoaded &&
    `
    opacity: 1;
    transform: none;
  `};
`;

const ImageLoader = ({ imageUrl, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = handleImageLoad;

    return () => {
      img.src = null;
      img.onload = null;
    };
  });

  return (
    <Wrapper>
      <Background isLoaded={isLoaded} imageUrl={imageUrl}>
        <img src={imageUrl} alt={alt} />
      </Background>
    </Wrapper>
  );
};

ImageLoader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageLoader;
