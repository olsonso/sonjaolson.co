import React from "react";
import logo from "./assets/sonja.JPG";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import "./App.css";
import { useSpring, animated } from "react-spring";

const Bio = styled.div`
  margin: 0 auto;
`;
function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="portfolio-img" alt="logo" />
        <Bio>
          <animated.div style={props}>Sonja Olson</animated.div>
          <FaGithub href="https://github.com/olsonso" />
          <AiFillLinkedin href="https://www.linkedin.com/in/olsonso/" />
        </Bio>
      </header>
    </div>
  );
}

export default App;
