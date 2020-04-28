import React, { Component } from "react";
import { Grid, Input, Label } from "semantic-ui-react";

class labelinputfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _label: this.props.label,
      _placeholder: this.props.placeholder,
    };
  }

  render() {
    if (this.props.error) {
      return (
        <Grid.Row columns={2}>
          <Grid.Column padded verticalAlign="middle" textAlign="center">
            <label className="flabel">{this.state._label}</label>
          </Grid.Column>
          <Grid.Column padded>
            <Input
            id={this.props.id}
              fluid
              placeholder={this.state._placeholder}
              onChange={this.props.onChange}
            />
            <Label basic pointing color="red">
              {this.props.errorValue}
            </Label>
          </Grid.Column>
        </Grid.Row>
      );
    } else {
      return (
        <Grid.Row columns={2}>
          <Grid.Column padded verticalAlign="middle" textAlign="center">
            <label className="flabel">{this.state._label}</label>
          </Grid.Column>
          <Grid.Column padded>
            <Input
              fluid
              placeholder={this.state._placeholder}
              onChange={this.props.onChange}
            />
          </Grid.Column>
        </Grid.Row>
      );
    }
    // return (
    //   <Grid.Row columns={2}>
    //     <Grid.Column padded verticalAlign="middle" textAlign="center">
    //       <label className="flabel">{this.state._label}</label>
    //     </Grid.Column>
    //     <Grid.Column padded>
    //       <Input
    //         fluid
    //         placeholder={this.state._placeholder}
    //         onChange={this.props.onChange}
    //       />
    //       <Label basic color="red">
    //         {this.props.errorValue}
    //       </Label>
    //     </Grid.Column>
    //   </Grid.Row>
    // );
  }
}

export default labelinputfield;
