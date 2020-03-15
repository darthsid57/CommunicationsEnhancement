import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import CommendationForm from "./CommendationForm";

class Showme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMe: false
    };

    this.getInitialState = this.getInitialState.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClick2 = this.onClick2.bind(this);
  }

  getInitialState() {
    return { showMe: false };
  }

  onClick() {
    this.setState({ showMe: true });
  }

  onClick2() {
    this.setState({ showMe: false });
  }

  render() {
    if (this.state.showMe === false) {
      return <a onClick={this.onClick}> press me </a>;
    }
    if (this.state.showMe === true) {
      return (
        <div>
          <CommendationForm />
          <a onClick={this.onClick2}> press me2 </a>{" "}
        </div>
      );
    }
  }
}

export default Showme;
