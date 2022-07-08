import React from "react";
import styled from "styled-components";

const BlueBanner = ({ children }) => {
  return <MainDiv>{children}</MainDiv>;
};

export default BlueBanner;

const MainDiv = styled.div`
  /* position: absolute; */
  width: 1920px;
  height: 163px;

  background: #53b3ea;
  border-radius: 12px;
`;
