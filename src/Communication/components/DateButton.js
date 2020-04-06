import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { registerLocale } from "react-datepicker";
import { enAU } from "date-fns/esm/locale";
import { Grid } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

class Example extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    console.log(this.state.startDate);
  };

  render() {
    return (
      <DatePicker
        selected={this.props.selected}
        onChange={this.props.onChange}
        className="finput"
        dateFormat="dd/MM/yyyy"
        maxDate={addDays(new Date(), 0)}
      />
    );
  }
}

export default Example;
