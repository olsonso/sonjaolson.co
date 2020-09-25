import React from "react";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import Image from "../../assets/newrelic.png";
const Icon = styled.img`
  height: 5vh;
`;

const Resume = () => {
  return (
    <div>
      <div>Current: Software Engineer</div>
      <Icon src={Image} />
      <div>New Relic</div>
    </div>
  );
};

export default Resume;
