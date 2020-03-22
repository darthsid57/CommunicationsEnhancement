import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addClientNumber,
  addClientName,
  addIdNumber,
  addPhoneContact,
  addEmailAddress,
  addIdType,
  addRegion,
  addOffice
} from "../Actions/UserAction";
import { Input, Label, Grid, Form } from "semantic-ui-react";
import Regions from "../../Redux/data/Regions";
import Offices from "../../Redux/data/offices";
import IdTypes from "../../Redux/data/IdType";
import Labelinputfield from "../../components/labelinputfield";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserDetail: {
        clientNumber: "",
        clientName: "",
        IdNumber: "",
        phoneContact: "",
        emailAddress: "",
        IdType: "",
        region: "",
        office: ""
      }
    };

    this.handleClientNumberChange = this.handleClientNumberChange.bind(this);
    this.handleClientNameChange = this.handleClientNameChange.bind(this);
    this.handleIdNumberChange = this.handleIdNumberChange.bind(this);
    this.handlePhoneContactChange = this.handlePhoneContactChange.bind(this);
    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handleIdTypeChange = this.handleIdTypeChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleOfficeChange = this.handleOfficeChange.bind(this);
  }

  // state = { clientNumber: "" };

  handleClientNumberChange(event) {
    this.setState({ clientNumber: event.target.value });

    const inputValue = event.target.value;
    this.props.addClientNumber(inputValue);

    console.log(event.target.value);
  }

  handleClientNameChange(event) {
    this.setState({ clientName: event.target.value });

    const inputValue = event.target.value;
    this.props.addClientName(inputValue);

    console.log(event.target.value);
  }

  handleIdNumberChange(event) {
    this.setState({ IdNumber: event.target.value });

    const inputValue = event.target.value;
    this.props.addIdNumber(inputValue);

    console.log(event.target.value);
  }

  handlePhoneContactChange(event) {
    const inputValue = event.target.value;
    this.props.addPhoneContact(inputValue);
  }

  handleEmailAddressChange(event) {
    const inputValue = event.target.value;
    this.props.addEmailAddress(inputValue);
  }

  handleIdTypeChange(event, { value }) {
    console.log(value);
    const inputValue = value;
    this.props.addIdType(inputValue);
  }

  handleRegionChange(event, { value }) {
    const inputValue = value;
    this.props.addRegion(inputValue);
  }

  handleOfficeChange(event, { value }) {
    const inputValue = value;
    this.props.addOffice(inputValue);
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
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column padded verticalAlign="middle" textAlign="center">
                    <label className="flabel">Client Name :*</label>
                  </Grid.Column>
                  <Grid.Column padded verticalAlign="middle" textAlign="center">
                    <input
                      placeholder="Client Name"
                      className="finput"
                      onChange={this.handleClientNameChange}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column padded verticalAlign="middle" textAlign="center">
                    <label className="flabel">ID Number :*</label>
                  </Grid.Column>
                  <Grid.Column padded>
                    <input
                      placeholder="ID Number"
                      className="finput"
                      onChange={this.handleIdNumberChange}
                    />
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
    clientNumber: state.CustomerDetail.clientNumber,
    clientName: state.CustomerDetail.clientName,
    IdNumber: state.CustomerDetail.IdNumber,
    phoneContact: state.CustomerDetail.phoneContact,
    emailAddress: state.CustomerDetail.emailAddress,
    IdType: state.CustomerDetail.IdType,
    region: state.CustomerDetail.region,
    office: state.CustomerDetail.office
  };
}

const mapDispatchToProps = {
  addClientNumber,
  addClientName,
  addIdNumber,
  addPhoneContact,
  addEmailAddress,
  addIdType,
  addRegion,
  addOffice
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
