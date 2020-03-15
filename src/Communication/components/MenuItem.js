import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: this.props.value
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu.Item
        name={this.state.name}
        active={activeItem === this.state.name}
        onClick={this.handleItemClick}
      />
    );
  }
}

export default MenuItem;
