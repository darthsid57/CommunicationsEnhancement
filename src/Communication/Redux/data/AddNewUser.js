import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser } from "../Actions/newUserAction";
import { Input, Grid } from "semantic-ui-react";
import { bindActionCreators } from "redux";

class AddNewUser extends Component {
  render() {
    return (
      <Grid.Column>
        <Input placeholder="Test" onChange={this.props.addNewUser()} />
      </Grid.Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.userDetails
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addNewUser: addNewUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddNewUser);
