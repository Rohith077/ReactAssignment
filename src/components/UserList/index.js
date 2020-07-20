import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";

const BodyWrapper = styled.div`
  grid-gap: 10px;
  padding: 20px;
  margin-top: 1em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  background-color: #d3d3d329;
`;
export default class UserList extends React.Component {
  state = {
    loading: true,
    user: [],
  };

  async componentDidMount() {
    const url = "https://reqres.in/api/users?page=2";
    const response = await fetch(url);
    const userList = await response.json();
    this.setState({ user: userList.data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.user) {
      return <div>didn't get a person</div>;
    }

    return (
      <BodyWrapper>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((dataList) => (
              <tr>
                <td>{dataList.first_name}</td>
                <td>{dataList.last_name}</td>
                <td>{dataList.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </BodyWrapper>
    );
  }
}
