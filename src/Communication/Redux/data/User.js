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
import {
  Input,
  Label,
  Grid,
  Form,
  Header,
  Divider,
  Button,
  Message,
} from "semantic-ui-react";
import Regions from "../../Redux/data/Regions";
import Offices from "../../Redux/data/offices";
import IdTypes from "../../Redux/data/IdType";
import Labelinputfield from "../../components/labelinputfield";
import * as EmailValidator from "email-validator";
import TypeofCommunication from "../../components/Typeofcommunication";

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
      showNow: false,
      isRerror: false,
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
    this.submitButtonClicked = this.submitButtonClicked.bind(this);
    this.returnComponent = this.returnComponent.bind(this);
    this.returnErrorMessage = this.returnErrorMessage.bind(this);
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
    this.setState({ emailAddress: inputValue });
    // this.props.addEmailAddress(inputValue);
  }

  clientNumber() {
    if (this.state.clientNumberError === true) {
      return (
        <Grid.Row columns={2} divided padded>
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
        <Grid.Row columns={2} divided padded>
          <Grid.Column padded verticalAlign="middle" textAlign="center">
            <label className="flabel">Client Number</label>
            <br />
            <label>(Licence Number)</label>
          </Grid.Column>
          <Grid.Column padded verticalAlign="middle" textAlign="center">
            <input
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
    const inputValue = event.target.value;

    if (isNaN(inputValue)) {
      console.log("Alphabets present in Client Number" + inputValue);
      this.setState({ clientNumberError: false });
    } else {
      this.setState({ clientNumberError: true });
      console.log(inputValue);
      // this.props.addClientNumber(inputValue);
      this.setState({ clientNumber: inputValue });
    }

    console.log(event.target.value);
  }

  handleClientNameChange(event) {
    const inputValue = event.target.value;

    if (!inputValue) {
      console.log("Client Name Empty");
    } else {
      // this.props.addClientName(inputValue);

      console.log(event.target.value);
    }

    // this.props.addClientName(inputValue);
    this.setState({ clientName: inputValue });

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
    const inputValue = event.target.value;

    if (isNaN(inputValue)) {
      console.log("Alphabets present in Client Number" + inputValue);
      this.setState({ idNumberError: false });
    } else {
      this.setState({ idNumberError: true });
      console.log(inputValue);
      // this.props.addIdNumber(inputValue);
      this.setState({ IdNumber: inputValue });
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
      // this.props.addPhoneContact(inputValue);
      this.setState({ phoneContact: inputValue });
    }
  }

  handleIdTypeChange(event, { value }) {
    console.log(value);
    const inputValue = value;
    this.setState({ IdType: inputValue });
    // this.props.addIdType(inputValue);
  }

  handleRegionChange(event, { value }) {
    const inputValue = 1;
    // this.props.addRegion(inputValue);
  }

  handleOfficeChange(event, { value }) {
    const inputValue = value;
    // this.props.addOffice(inputValue);
    // this.props.addRegion(inputValue);
    this.setState({ office: inputValue });
    this.setState({ region: inputValue });
  }

  submitButtonClicked() {
    console.log(this.state.emailAddress);
    console.log(this.state.clientNumber);
    console.log(this.state.clientName);
    console.log(this.state.IdNumber);
    console.log(this.state.phoneContact);
    console.log(this.state.office);
    console.log(this.state.region);
    console.log(this.state.IdType);

    if (
      this.state.emailAddress === undefined ||
      this.state.clientName === undefined ||
      this.state.IdNumber === undefined ||
      this.state.phoneContact === undefined ||
      this.state.office === undefined ||
      this.state.region === undefined ||
      this.state.IdType === undefined
    ) {
      console.log("undefined field");
      this.setState({ isRerror: true });
      this.setState({ showNow: false });
    } else if (
      this.state.emailAddress === "" ||
      this.state.clientName === "" ||
      this.state.IdNumber === "" ||
      this.state.phoneContact === "" ||
      this.state.office === "" ||
      this.state.region === "" ||
      this.state.IdType === ""
    ) {
      console.log("empty field");
      this.setState({ isRerror: true });
      this.setState({ showNow: false });
    } else {
      console.log("Good to go");
      this.props.addEmailAddress(this.state.emailAddress);
      this.props.addClientNumber(this.state.clientNumber);
      this.props.addClientName(this.state.clientName);
      this.props.addIdNumber(this.state.IdNumber);
      this.props.addPhoneContact(this.state.phoneContact);
      this.props.addIdType(this.state.IdType);
      this.props.addRegion(this.state.office);
      this.props.addOffice(this.state.office);
      this.setState({ showNow: true });
      this.setState({ isRerror: false });
    }
  }

  returnComponent() {
    if (this.state.showNow) {
      return (
        <div>
          <Header as="h1">Communication Details</Header>
          <Divider inverted />
          <TypeofCommunication />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  returnErrorMessage() {
    if (this.state.isRerror) {
      return (
        <Message
          error
          header="Missing Fields"
          content="Please enter all mandatory Data"
        />
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <Grid columns={2} divided padded fluid="true" stackable>
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
                    <Grid.Column
                      padded
                      verticalAlign="middle"
                      textAlign="center"
                    >
                      <label className="flabel">Client Name :*</label>
                    </Grid.Column>
                    <Grid.Column
                      padded
                      verticalAlign="middle"
                      textAlign="center"
                    >
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
                  <Grid.Row columns={3}>
                    {/* <Regions
                    label="Region"
                    placeholder="Region"
                    onChange={this.handleRegionChange}
                  /> */}
                    <Grid.Column>
                    <label className="flabel">Location</label>
                    </Grid.Column>
                    <Offices
                      label="Location"
                      placeholder="Location"
                      onChange={this.handleOfficeChange}
                    />
                    <Grid.Column>
                      <Form.Button
                        floated="right"
                        fluid
                        color="orange"
                        onClick={this.submitButtonClicked}
                      >
                        Submit Details
                      </Form.Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        {this.returnErrorMessage()}
        {this.returnComponent()}
      </Grid>
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
