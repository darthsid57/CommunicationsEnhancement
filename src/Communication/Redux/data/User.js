import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser } from "../Actions/UserAction";
import { Input, Label, Grid, Form } from "semantic-ui-react";
import Regions from "../../Redux/data/Regions";
import Offices from "../../Redux/data/offices";
import IdTypes from "../../Redux/data/IdType";
import Labelinputfield from "../../components/labelinputfield";

class User extends Component {
  state = { clientNumber: "" };

  handleClientNumberChange(event) {
    const inputValue = event.target.value;
    this.props.addNewUser(inputValue);

    console.log(event.target.value);
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Form>
            <Form.Field>
              <Grid columns={2} divided stackable>
                <Grid.Row>
                  <Grid.Column padded verticalAlign="middle" textAlign="center">
                    <label className="flabel">Client Number</label>
                    <br />
                    <label>(Licence Number)</label>
                  </Grid.Column>
                  <Grid.Column padded verticalAlign="middle" textAlign="center">
                    <input
                      placeholder="Client Number"
                      className="finput"
                      onChange={this.handleClientNumberChange}
                    />
                    <Input
                      onChange={this.handleClientNumberChange.bind(this)}
                    />
                    <Label>{this.props.UserDetail}</Label>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column padded verticalAlign="middle" textAlign="center">
                    <label className="flabel">Client Name :*</label>
                  </Grid.Column>
                  <Grid.Column padded verticalAlign="middle" textAlign="center">
                    <input placeholder="Client Name" className="finput" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column padded verticalAlign="middle" textAlign="center">
                    <label className="flabel">ID Number :*</label>
                  </Grid.Column>
                  <Grid.Column padded>
                    <input placeholder="ID Number" className="finput" />
                  </Grid.Column>
                  <Grid.Column padded>
                    <IdTypes
                      label="ID Type"
                      placeholder="ID Type"
                      onChange={this.handleIdTypeChange}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Form>
            <Form.Field>
              <Grid columns={2} divided stackable>
                <Grid.Row>
                  <Grid.Column padded textAlign="center" verticalAlign="middle">
                    <label className="flabel">Phone Contact :*</label>
                  </Grid.Column>
                  <Grid.Column padded textAlign="center">
                    {/* <label>(Please provide a valid Contact Number)</label> */}
                    <input placeholder="Phone Contact" className="finput" />
                  </Grid.Column>
                </Grid.Row>
                <Labelinputfield
                  label="Email Address :*"
                  placeholder="Email Address"
                />
                <Grid.Row>
                  <Regions
                    label="Region"
                    placeholder="Region"
                    onChange={this.handleRegionChange}
                  />
                  <Offices
                    label="Office"
                    placeholder="Office"
                    onChange={this.handleOfficeChange}
                  />
                </Grid.Row>
              </Grid>
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    UserDetail: state.UserDetail.clientNumber
  };
}

const mapDispatchToProps = {
  addNewUser
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
