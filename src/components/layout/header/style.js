import React from 'react';
import styled from 'styled-components';

const RenderHeader = styled.header`
  display: flex;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, .09);
  transition: all .2s ease-in-out;
  height: 6rem;
  align-items: center !important;
  padding: 1rem 1.5rem;
`;

export default ({ children }) => 
  <RenderHeader>
      {children}
  </RenderHeader>





