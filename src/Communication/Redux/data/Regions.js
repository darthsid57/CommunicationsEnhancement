import React, { Component } from "react";
import { connect } from "react-redux";
import { getRegion } from "../Actions/regionAction";
import { Dropdown, Grid } from "semantic-ui-react";

class Regions extends Component {
  componentWillMount() {
    this.props.getRegion();
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
          options={this.props.Regions}
          onChange={this.props.onChange}
          error={this.props.error}
        />
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({
  Regions: state.Regions.items
});

export default connect(mapStateToProps, { getRegion })(Regions);
