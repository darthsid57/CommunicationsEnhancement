import React, { Component } from "react";
import axios from "axios";
import { Grid, Form, Label, Input, Button, Checkbox } from "semantic-ui-react";
import "../comm.css";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row padded>
        <Grid.Column padded>
          <Grid.Row padded>
            <Checkbox
              label="I hereby declare that all the information provided is true . 
                  The information you give us in relation to this communication may be given to the police , 
                  law enforcement officers or any licensing body. "
              padded
            />
          </Grid.Row>
          <Form.Field padded>
            <Label as="a" basic color="red" pointing="right">
              Note
            </Label>
            <span>
              Its Mandatory to fill in all the information that is required by
              the Land Transport Authority.
            </span>
          </Form.Field>
          <Form.Field onSubmit={this.onFormSubmit} padded inline>
            {/* <Header as="h3">File Upload</Header> */}
            <Input type="file" name="myImage" onChange={this.onChange} />
            <Button type="submit" color="google plus">
              Upload
            </Button>
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Button color="orange" type="submit" padded>
            Submit
          </Button>
          <Button color="green" type="submit" padded>
            Reset
          </Button>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default FooterComponent;
