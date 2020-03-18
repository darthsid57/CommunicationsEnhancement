import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitLoginDetails = this.handleSubmitLoginDetails.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });

    // console.log("Username " + this.state.username);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
    // console.log("Password " + this.state.password);
  }

  handleSubmitLoginDetails() {
    // console.log(this.state.username + this.state.password);
    //This will submit details to server and verify user login detail.
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={this.handleUsernameChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handlePasswordChange}
              />

              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.handleSubmitLoginDetails}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginPage;
