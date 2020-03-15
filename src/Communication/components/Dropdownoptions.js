import React, { Component } from "react";
import { Grid, Dropdown } from "semantic-ui-react";

class Dropdownoptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _placeholder: this.props.placeholder
    };
  }

  render() {
    return (
      <Grid.Column padded verticalAlign="middle" textAlign="center">
        <Dropdown placeholder={this.state._placeholder} selection fluid />
      </Grid.Column>
    );
  }
}

export default Dropdownoptions;
