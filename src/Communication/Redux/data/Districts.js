import React, { Component } from "react";
import { connect } from "react-redux";
import { getDristrict } from "../Actions/districtAction";
import { Dropdown, Grid } from "semantic-ui-react";

class Districts extends Component {
  componentWillMount() {
    this.props.getDristrict();
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
          options={this.props.Districts}
          onChange={this.props.onChange}
          error={this.props.error}
        />
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({
  Districts: state.Districts.items
});

export default connect(mapStateToProps, { getDristrict })(Districts);
