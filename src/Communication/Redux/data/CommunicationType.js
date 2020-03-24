import React, { Component } from "react";
import { connect } from "react-redux";
import { getCommunicationType } from "../Actions/communicationTypeAction";
import { Dropdown, Grid } from "semantic-ui-react";

class CommuncationType extends Component {
  componentWillMount() {
    this.props.getCommunicationType();
  }

  render() {
    return (
      <Grid.Column>
        <Dropdown
          label={this.props.label}
          placeholder={this.props.placeholder}
          fluid
          selection
          search
          options={this.props.CommunicationType}
          onChange={this.props.onChange}
          error={this.props.error}
        />
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({
  CommunicationType: state.CommunicationType.items
});

export default connect(mapStateToProps, { getCommunicationType })(
  CommuncationType
);
