import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Grid } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

class Example extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
    console.log(this.state.startDate);
  };

  render() {
    return (
      <Grid.Column padded verticalAlign="middle" textAlign="center">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </Grid.Column>
    );
  }
}

export default Example;
