import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import "./home.css";
import { useSpring, animated } from "react-spring";
import Card from "../../components/card/card";
import Resume from "../../components/resume/resume";

const Bio = styled.div`
  margin: 0 auto;
`;

const Github = styled(FaGithub)`
  color: black;
  &visited {
    color: inherit;
  }
`;

const LinkedIn = styled(AiFillLinkedin)`
  color: black;
  &visited {
    color: inherit;
  }
`;
const Home = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div className="App">
      <header className="App-header">
        <animated.div style={props}>
          <Card />
          <Bio>
            Sonja Olson <br />
            <a href="https://github.com/olsonso">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/olsonso/">
              <LinkedIn />
            </a>
          </Bio>
        </animated.div>
      </header>
      <div className="section">
        <Resume />
      </div>
    </div>
  );
};

export default Home;
