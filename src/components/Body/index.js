import React from "react";
import styled from "styled-components";
import { Tab, Tabs } from "react-bootstrap";
import UserList from "../UserList/index";
import UserProfile from "../UserProfile/index";

const BodyWrapper = styled.div`
  grid-gap: 10px;
  padding: 20px;
  margin-top: 1em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  background-color: #d3d3d329;
`;
export default class Body extends React.Component {
  render() {
    return (
      <BodyWrapper>
        <h2>Page Title</h2>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="UserList">
            <UserList />
          </Tab>
          <Tab eventKey="profile" title="UserProfile">
            <UserProfile />
          </Tab>
        </Tabs>
      </BodyWrapper>
    );
  }
}
