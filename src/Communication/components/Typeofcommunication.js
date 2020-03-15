import React, { Component } from "react";
import { Label, Dropdown } from "semantic-ui-react";

class TypeofCommunication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { key: 1, text: "Choice 1", value: 1 },
        { key: 2, text: "Choice 2", value: 2 },
        { key: 3, text: "Choice 3", value: 3 }
      ],
      requestType: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTypeofCommChange = this.handleTypeofCommChange.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({
  //       value: event.target.value
  //     });

  //     console.log(event.target.value);
  //   }

  handleChange(event, { value }) {
    this.setState({
      requestType: value
    });
    console.log(value);
  }

  handleTypeofCommChange() {
    console.log(this.state.requestType);
    if (this.state.requestType === 1) {
      return <Label>A</Label>;
    }
    if (this.state.requestType === 2) {
      return <Label>B</Label>;
    }
    if (this.state.requestType === 3) {
      return <Label>C</Label>;
    }
  }

  //   render() {
  //     if (this.state.options.value === 1) {
  //       return <Label>A</Label>;
  //     }
  //     if (this.state.options.value === 2) {
  //       return <Label>B</Label>;
  //     }
  //     if (this.state.options.value === 3) {
  //       return <Label>C</Label>;
  //     }
  //   }

  render() {
    console.log(this.state.requestType);
    if (this.state.requestType === 1) {
      return (
        <div>
          <Dropdown
            placeholder="Type of Communication"
            selection
            fluid
            options={this.state.options}
            onChange={this.handleTypeofCommChange}
          />
          <Label>A</Label>
        </div>
      );
    }
    if (this.state.requestType === 2) {
      return (
        <div>
          <Dropdown
            placeholder="Type of Communication"
            selection
            fluid
            options={this.state.options}
            onChange={this.handleTypeofCommChange}
          />
          <Label>B</Label>
        </div>
      );
    } else {
      return (
        <div>
          <Dropdown
            placeholder="Type of Communication"
            selection
            fluid
            options={this.state.options}
            onChange={this.handleTypeofCommChange}
          />
          <Label>C</Label>
        </div>
      );
    }
  }
}

export default TypeofCommunication;
