import React, { Component } from "react";
import { connect } from "react-redux";
import { getOffice } from "../Actions/officeAction";
import { Dropdown, Grid, Label } from "semantic-ui-react";

class Offices extends Component {
  componentWillMount() {
    this.props.getOffice();
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
          options={this.props.Offices}
          onChange={this.props.onChange}
          error={this.props.error}
        />
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({
  Offices: state.Offices.items
});

export default connect(mapStateToProps, { getOffice })(Offices);
