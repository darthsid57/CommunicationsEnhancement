import React, { Component } from "react";
import { connect } from "react-redux";
import { getOfficers } from "../Actions/officersAction";
import { Dropdown, Grid } from "semantic-ui-react";

class Officers extends Component {
  componentWillMount() {
    this.props.getOfficers();
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
          options={this.props.Officers}
          onChange={this.props.onChange}
          error={this.props.error}
        />
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({
  Officers: state.Officers.items
});

export default connect(mapStateToProps, { getOfficers })(Officers);
