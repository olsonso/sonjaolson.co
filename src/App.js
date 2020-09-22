import React from "react";
import logo from "./assets/sonja.JPG";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import "./App.css";

const Bio = styled.div`
  margin: 0 auto;
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="portfolio-img" alt="logo" />
        <Bio>
          Sonja Olson <br />
          <FaGithub href="https://github.com/olsonso" />
          <AiFillLinkedin href="https://www.linkedin.com/in/olsonso/" />
        </Bio>
      </header>
    </div>
  );
}

export default App;
