import React from "react";
import styled from "styled-components";
import Header from "./components/Header/index";
import Body from "./components/Body/index";

const GridWrapper = styled.div`
  ${"" /* display: grid; */}
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export class Home extends React.Component {
  render() {
    return (
      <GridWrapper>
        <Header />
        <Body />
      </GridWrapper>
    );
  }
}
