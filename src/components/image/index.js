import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const Image = ({ src, alt }) => (
  <Wrapper>
    <img src={src} alt={alt}/>
  </Wrapper>
);
Image.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  alt: PropTypes.string,
}
export default Image;
