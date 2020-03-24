import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class FormInputReadOnly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: this.props.label,
      value: this.props.value
    };
  }

  render() {
    return (
      <Form.Input label={this.state.label} value={this.state.value} readOnly />
    );
  }
}

export default FormInputReadOnly;
