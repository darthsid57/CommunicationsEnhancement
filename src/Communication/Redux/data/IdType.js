import React, { Component } from "react";
import { connect } from "react-redux";
import { getIdType } from "../Actions/idTypeAction";
import { Dropdown, Grid } from "semantic-ui-react";

class IdTypes extends Component {
  componentWillMount() {
    this.props.getIdType();
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
          options={this.props.IdTypes}
          onChange={this.props.onChange}
          error={this.props.error}
        />
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({
  IdTypes: state.IdTypes.items
});

export default connect(mapStateToProps, { getIdType })(IdTypes);
