import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const BodyWrapper = styled.div`,
  grid-gap: 10px;
  padding: 20px;
  margin-top: 1em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  background-color: #d3d3d329;
`;

export class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      LastName: "",
      email: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    // this.getUserDetails();
  }

  getUserDetails() {}

  editUserDetails(newMeetup) {}

  onSubmit(e) {}

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <BodyWrapper>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </BodyWrapper>
    );
  }
}

export default UserProfile;
