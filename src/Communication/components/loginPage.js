import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container,
  Modal,
  Icon,
} from "semantic-ui-react";
import auth from "./auth";
import axios from "axios";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserID: "",
      username: "",
      password: "",
      usernameError: null,
      passwordError: null,
      NotFoundError: null,
      token: "",
      status: null,
      open: false,
      role: 0,
      FullName: "",
      userDetails: [],
    };

    this._isMounted = false;

    this.compareCredentials = this.compareCredentials.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.ModalClose = this.ModalClose.bind(this);
    this.ModalOpen = this.ModalOpen.bind(this);
    this.handleSubmitLoginDetails = this.handleSubmitLoginDetails.bind(this);
  }

  ModalClose() {
    this.setState({ open: false });
  }

  ModalOpen() {
    this.setState({ open: true });
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });

    // console.log("Username " + this.state.username);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
    // console.log("Password " + this.state.password);
  }

  async compareCredentials(event) {
    event.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      this.setState({
        usernameError: "Please enter Username",
        passwordError: "Please enter Password",
      });
      //clear form
    } else {
      this.setState({
        usernameError: null,
        passwordError: null,
      });
      var users = {
        username: this.state.username,
        password: this.state.password,
      };

      this._isMounted = true;

      console.log(this.state.username);
      console.log(this.state.password);
      console.log(users);

      await axios
        .post("http://localhost:2567/verify/api/signin", {
          username: users.username,
          password: users.password,
        })
        .then((response) => {
          console.log(response.data.status);

          //getDetailsfromToken(response.data.token);
          if (this._isMounted) {
            this.setState({
              token: response.data.token,
              status: response.data.status,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      if (this.state.status === 500) {
        this.ModalOpen();
      } else {
        const authorization = "Bearer " + this.state.token;
        console.log(authorization);

        axios
          .get("http://localhost:2567/verify/user/getTokenData", {
            headers: { authorization: authorization },
          })
          .then((response) => {
            this.setState({ userDetails: response.data.authdata });
            console.log(response.data.authdata);
            this.state.userDetails.map((x) => {
              console.log(x.roleID);
              this.setState({ UserID: x.UserID, username: x.username });
            });
            this.handleSubmitLoginDetails();
          })
          .catch(function (error) {
            console.log(error);
          });
        this._isMounted = false;
      }
    }
  }

  handleSubmitLoginDetails() {
    // console.log(this.state.username + this.state.password);
    //This will submit details to server and verify user login detail.
    auth.login(() => {
      this.props.history.push(`/ViewPageInternal/${this.state.UserID}`);
      // this.props.history.push(`/ViewPageInternal`);
    });
  }

  render() {
    return (
      <Container>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }} color="black">
            <Header as="h2" color="orange" textAlign="center">
              {/* <Image src={logo} /> Log-in to your account */}
            </Header>
            <Form size="large" onSubmit={this.compareCredentials}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  error={this.state.usernameError}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  error={this.state.passwordError}
                />
                {/* <Form.Dropdown
                lable="Role"
                placeholder="Role"
                fluid
                selection
                options={this.state.roleOptions}
                onChange={this.handleRoleChange}
              /> */}

                <Form.Button
                  color="orange"
                  fluid
                  size="large"
                  // onClick={() => {
                  //   auth.login(() => {
                  //     props.history.push("/app");
                  //   });
                  // }}
                  type="submit"
                >
                  Login
                </Form.Button>
              </Segment>
            </Form>
          </Grid.Column>
          <Modal
            size="tiny"
            open={this.state.open}
            onClose={this.ModalClose}
            closeIcon
          >
            <Modal.Content>
              <Modal.Description>
                <Icon name="exclamation" size="massive" />
                <h1>User Not Found</h1>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Grid>
      </Container>
    );
  }
}

export default LoginPage;
