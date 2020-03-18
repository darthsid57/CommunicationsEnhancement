import React, { Component } from "react";
import { connect } from "react-redux";
import { getRegion } from "../Actions/regionAction";
import { Dropdown } from "semantic-ui-react";

class Regions extends Component {
  componentWillMount() {
    this.props.getRegion();
  }

  render() {
    return (
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
    );
  }
}

const mapStateToProps = state => ({
  Regions: state.Regions.items
});

export default connect(mapStateToProps, { getRegion })(Regions);
