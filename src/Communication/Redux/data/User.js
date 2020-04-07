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
  addOffice,
} from "../Actions/UserAction";
import { Input, Label, Grid, Form } from "semantic-ui-react";
import Regions from "../../Redux/data/Regions";
import Offices from "../../Redux/data/offices";
import IdTypes from "../../Redux/data/IdType";
import Labelinputfield from "../../components/labelinputfield";
import * as EmailValidator from "email-validator";

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
        office: "",
      },
      emailError: true,
      clientNumberError: true,
      idNumberError: true,
      phoneContactError: true,
    };

    this.handleClientNumberChange = this.handleClientNumberChange.bind(this);
    this.handleClientNameChange = this.handleClientNameChange.bind(this);
    this.handleIdNumberChange = this.handleIdNumberChange.bind(this);
    this.handlePhoneContactChange = this.handlePhoneContactChange.bind(this);
    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handleIdTypeChange = this.handleIdTypeChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleOfficeChange = this.handleOfficeChange.bind(this);
    this.clientNumber = this.clientNumber.bind(this);
    this.emailAddress = this.emailAddress.bind(this);
    this.idNumber = this.idNumber.bind(this);
    this.phoneContact = this.phoneContact.bind(this);
  }

  // state = { clientNumber: "" };

  emailAddress() {
    if (this.state.emailError === true) {
      return (
        <Labelinputfield
          label="Email Address :*"
          placeholder="Email Address"
          onChange={this.handleEmailAddressChange}
        />
      );
    } else {
      return (
        <Labelinputfield
          label="Email Address :*"
          placeholder="Email Address"
          onChange={this.handleEmailAddressChange}
          error={true}
          errorValue="Invalid Email Address"
        />
      );
    }
  }

  handleEmailAddressChange(event) {
    const inputValue = event.target.value;
    var isEmail = EmailValidator.validate(inputValue);
    console.log("IsEmail: " + isEmail);
    this.setState({ emailError: isEmail });
    var emailError = this.state.emailError;
    console.log("IsEmail: " + emailError);
    this.props.addEmailAddress(inputValue);
  }

  clientNumber() {
    if (this.state.clientNumberError === true) {
      return (
        <Grid.Row>
          <Grid.Column padded verticalAlign="middle" textAlign="center">
            <label className="flabel">Client Number</label>
            <br />
            <label>(Licence Number)</label>
          </Grid.Column>
          <Grid.Column padded verticalAlign="middle" textAlign="center">
            <Input
              fluid
              placeholder="Client Number"
              onChange={this.handleClientNumberChange}
            />
          </Grid.Column>
        </Grid.Row>
      );
    } else {
      return (
        <Grid.Row>
          <Grid.Column padded verticalAlign="middle" textAlign="center">
            <label className="flabel">Client Number</label>
            <br />
            <label>(Licence Number)</label>
          </Grid.Column>
          <Grid.Column padded verticalAlign="middle" textAlign="center">
            <Input
              fluid
              placeholder="Client Number"
              onChange={this.handleClientNumberChange}
            />
            <Label basic pointing color="red">
              Numbers only
            </Label>
          </Grid.Column>
        </Grid.Row>
      );
    }
  }

  handleClientNumberChange(event) {
    this.setState({ clientNumber: event.target.value });

    const inputValue = event.target.value;

    if (isNaN(inputValue)) {
      console.log("Alphabets present in Client Number" + inputValue);
      this.setState({ clientNumberError: false });
    } else {
      this.setState({ clientNumberError: true });
      console.log(inputValue);
      this.props.addClientNumber(inputValue);
    }

    console.log(event.target.value);
  }

  handleClientNameChange(event) {
    this.setState({ clientName: event.target.value });

    const inputValue = event.target.value;

    if (!inputValue) {
      console.log("Client Name Empty");
    } else {
      this.props.addClientName(inputValue);

      console.log(event.target.value);
    }

    this.props.addClientName(inputValue);

    console.log(event.target.value);
  }

  idNumber() {
    if (this.state.idNumberError === true) {
      return (
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
      );
    } else {
      return (
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
            <Label basic pointing color="red">
              Numbers only
            </Label>
          </Grid.Column>
          <Grid.Column padded>
            <IdTypes
              label="ID Type"
              placeholder="ID Type"
              onChange={this.handleIdTypeChange}
            />
          </Grid.Column>
        </Grid.Row>
      );
    }
  }

  handleIdNumberChange(event) {
    this.setState({ IdNumber: event.target.value });

    const inputValue = event.target.value;

    if (isNaN(inputValue)) {
      console.log("Alphabets present in Client Number" + inputValue);
      this.setState({ idNumberError: false });
    } else {
      this.setState({ idNumberError: true });
      console.log(inputValue);
      this.props.addIdNumber(inputValue);
    }

    console.log(event.target.value);
  }

  phoneContact() {
    if (this.state.phoneContactError === true) {
      return (
        <Grid.Row>
          <Grid.Column padded textAlign="center" verticalAlign="middle">
            <label className="flabel">Phone Contact :*</label>
          </Grid.Column>
          <Grid.Column padded textAlign="center">
            {/* <label>(Please provide a valid Contact Number)</label> */}
            <input
              placeholder="Phone Contact"
              className="finput"
              onChange={this.handlePhoneContactChange}
            />
          </Grid.Column>
        </Grid.Row>
      );
    } else {
      return (
        <Grid.Row>
          <Grid.Column padded textAlign="center" verticalAlign="middle">
            <label className="flabel">Phone Contact :*</label>
          </Grid.Column>
          <Grid.Column padded textAlign="center">
            {/* <label>(Please provide a valid Contact Number)</label> */}
            <input
              placeholder="Phone Contact"
              className="finput"
              onChange={this.handlePhoneContactChange}
            />
            <Label basic pointing color="red">
              Numbers only
            </Label>
          </Grid.Column>
        </Grid.Row>
      );
    }
  }

  handlePhoneContactChange(event) {
    const inputValue = event.target.value;

    if (isNaN(inputValue)) {
      console.log("Alphabets present in Client Number" + inputValue);
      this.setState({ phoneContactError: false });
    } else {
      this.setState({ phoneContactError: true });
      console.log(inputValue);
      this.props.addPhoneContact(inputValue);
    }
  }

  handleIdTypeChange(event, { value }) {
    console.log(value);
    const inputValue = value;
    this.props.addIdType(inputValue);
  }

  handleRegionChange(event, { value }) {
    const inputValue = 1;
    this.props.addRegion(inputValue);
  }

  handleOfficeChange(event, { value }) {
    const inputValue = value;
    this.props.addOffice(inputValue);
    this.props.addRegion(inputValue);
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Form>
            <Form.Field>
              <Grid columns={2} divided stackable>
                {/* <Grid.Row>
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
                </Grid.Row> */}
                {this.clientNumber()}
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
                {this.idNumber()}
                {/* <Grid.Row columns={3}>
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
                </Grid.Row> */}
              </Grid>
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Form>
            <Form.Field>
              <Grid columns={2} divided stackable>
                {this.phoneContact()}
                {/* <Grid.Row>
                  <Grid.Column padded textAlign="center" verticalAlign="middle">
                    <label className="flabel">Phone Contact :*</label>
                  </Grid.Column>
                  <Grid.Column padded textAlign="center">
                    {/* <label>(Please provide a valid Contact Number)</label> */}
                {/* <input
                      placeholder="Phone Contact"
                      className="finput"
                      onChange={this.handlePhoneContactChange}
                    />
                  </Grid.Column>
                </Grid.Row> 
                */}

                {/* <Labelinputfield
                  label="Email Address :*"
                  placeholder="Email Address"
                  onChange={this.handleEmailAddressChange}
                  error="true"
                  errorValue="Invalid"
                /> */}
                {this.emailAddress()}
                <Grid.Row>
                  {/* <Regions
                    label="Region"
                    placeholder="Region"
                    onChange={this.handleRegionChange}
                  /> */}
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
    office: state.CustomerDetail.office,
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
  addOffice,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
