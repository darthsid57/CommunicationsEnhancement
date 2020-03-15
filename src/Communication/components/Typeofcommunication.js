import React, { Component } from "react";
import { Label, Dropdown, Grid, TextArea, Form } from "semantic-ui-react";
import Labelinputfield from "./labelinputfield";
import DropdownOptions from "./Dropdownoptions";
import Pickerfordate from "./DateButton";
import "../comm.css";

class TypeofCommunication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { key: 1, text: "Query", value: 1 },
        { key: 2, text: "Commendation", value: 2 },
        { key: 3, text: "Complain", value: 3 }
      ],
      requestType: 2
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
        <Grid columns={2} divided padded>
          <Grid.Row>
            <Grid.Column>
              {/* <Dropdown
                  placeholder="Type of Communication"
                  selection
                  fluid
                  options={this.state.options}
                /> */}
              {/* <Dropdown
                  placeholder="Type of Communication"
                  selection
                  fluid
                  options={this.state.options}
                  onChange={this.handleTypeofCommChange}
                /> */}
              <Dropdown
                placeholder="Type of Communication"
                selection
                fluid
                options={this.state.options}
                onChange={this.handleChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Dropdown placeholder="Sub Category1" selection fluid />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Grid columns={2} divided>
                  <Labelinputfield
                    label="Type of Incident :*"
                    placeholder="Type of Incident"
                  />

                  <Labelinputfield
                    label="Time of Incident :*"
                    placeholder="Time of Incident"
                  />
                  <Labelinputfield
                    label="Incident Area:*"
                    placeholder="Incident Area"
                  />
                </Grid>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <Grid columns={2} divided>
                    <Labelinputfield
                      label="Vehicle Number"
                      placeholder="Vehicle Number"
                    />
                    <Grid.Row columns={2} padded>
                      <DropdownOptions placeholder="Location of Incident" />
                      <Pickerfordate />
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <TextArea rows={3} placeholder="Tell us more" fluid />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
    if (this.state.requestType === 2) {
      return (
        <Grid columns={2} divided padded>
          <Grid.Row>
            <Grid.Column>
              {/* <Dropdown
                  placeholder="Type of Communication"
                  selection
                  fluid
                  options={this.state.options}
                /> */}
              {/* <Dropdown
                  placeholder="Type of Communication"
                  selection
                  fluid
                  options={this.state.options}
                  onChange={this.handleTypeofCommChange}
                /> */}
              <Dropdown
                placeholder="Type of Communication"
                selection
                fluid
                options={this.state.options}
                onChange={this.handleChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Pickerfordate />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Grid columns={2} divided>
                <Labelinputfield
                  label="Staff Name :"
                  placeholder="Staff Name"
                />

                <Labelinputfield
                  label="Office Name/Area :*"
                  placeholder="Time of Incident"
                />
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <Grid divided>
                    <Grid.Row>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <TextArea
                          rows={5}
                          placeholder="Reason for the Commendation :*"
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
    if (this.state.requestType === 3) {
      return (
        <Grid columns={2} divided padded>
          <Grid.Row>
            <Grid.Column>
              {/* <Dropdown
                placeholder="Type of Communication"
                selection
                fluid
                options={this.state.options}
              /> */}
              {/* <Dropdown
                placeholder="Type of Communication"
                selection
                fluid
                options={this.state.options}
                onChange={this.handleTypeofCommChange}
              /> */}
              <Dropdown
                placeholder="Type of Communication"
                selection
                fluid
                options={this.state.options}
                onChange={this.handleChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Dropdown placeholder="Sub Category3" selection fluid />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Grid columns={2} divided>
                  <Labelinputfield
                    label="Type of Incident :*"
                    placeholder="Type of Incident"
                  />

                  <Labelinputfield
                    label="Time of Incident :*"
                    placeholder="Time of Incident"
                  />
                  <Labelinputfield
                    label="Incident Area:*"
                    placeholder="Incident Area"
                  />
                </Grid>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <Grid columns={2} divided>
                    <Labelinputfield
                      label="Vehicle Number"
                      placeholder="Vehicle Number"
                    />
                    <Grid.Row columns={2} padded>
                      <DropdownOptions placeholder="Location of Incident" />
                      <Pickerfordate />
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <TextArea rows={3} placeholder="Tell us more" fluid />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }
}

export default TypeofCommunication;
