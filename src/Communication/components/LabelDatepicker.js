import React, { Component } from "react";
import { Grid, Input } from "semantic-ui-react";
import DatePicker from "./DateButton";
import "../comm.css";

class labelDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _label: this.props.label,
      _placeholder: this.props.placeholder
    };
  }

  render() {
    return (
      <Grid.Column padded>
        <DatePicker />
      </Grid.Column>
    );
  }
}

export default labelDatePicker;
