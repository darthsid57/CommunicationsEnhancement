import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewUser } from "../Redux/Actions/UserAction";
import Axios from "axios";
import DatePicker from "react-datepicker";

import {
  Label,
  Dropdown,
  Grid,
  TextArea,
  Form,
  Input,
  Checkbox,
  Button,
  Responsive
} from "semantic-ui-react";
import Labelinputfield from "./labelinputfield";
import DropdownOptions from "./Dropdownoptions";
import Pickerfordate from "./DateButton";
import "../comm.css";
import FooterComponent from "./Footer";
import LabelDatepicker from "./DateButton";
import Regions from "../Redux/data/Regions";
import SubCategory from "../Redux/data/Subcategory";
import CommunicationType from "../Redux/data/CommunicationType";

class TypeofCommunication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { key: 1, text: "Enquiry", value: 1 },
        { key: 2, text: "Commendation", value: 2 },
        { key: 3, text: "Grievance", value: 3 }
      ],
      requestType: 3,
      regionValue: "",
      clientNumber: "",
      clientName: "",
      IdNumber: "",
      phoneContact: "",
      emailAddress: "",
      IdType: "",
      region: "",
      office: "",
      customerDetail: [],
      SubCategory: "",
      LocationOfIncident: "",
      currentTime: new Date(),
      typeofIncident: "",
      timeofIncident: "",
      incidentArea: "",
      vehicleNumber: "",
      incidentDate: "",
      otherDetails: "",
      dateOfEnquiry: "",
      otherDetailsEnquiry: "",
      isChecked: true,
      declaration: "",
      file: "",
      enquiryDate: "",
      commendationStaffName: "",
      commendationOfficeName: "",
      commendationDate: "",
      commendationReason: "",
      errorMessageClientNumber: "",
      errorMessageClientName: "",
      errorMessageIDNumber: "",
      errorMessageIDType: "",
      errorMessagePhoneContact: "",
      errorMessageEmailAddress: "",
      errorMessageRegion: "",
      errorMessageOffice: "",
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTypeofCommChange = this.handleTypeofCommChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
    this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);
    this.handleLocationOfIncidentChange = this.handleLocationOfIncidentChange.bind(
      this
    );
    this.handleSubmitGrievance = this.handleSubmitGrievance.bind(this);
    this.handleTypeOfincident = this.handleTypeOfincident.bind(this);
    this.handleTimeofIncident = this.handleTimeofIncident.bind(this);
    this.handleIncidentArea = this.handleIncidentArea.bind(this);
    this.handleVehicleNumberChange = this.handleVehicleNumberChange.bind(this);
    this.handleIncidentDateChange = this.handleIncidentDateChange.bind(this);
    this.handleOtherDetailsChange = this.handleOtherDetailsChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleImageFileGrievanceChange = this.handleImageFileGrievanceChange.bind(
      this
    );
    this.handleUploadButtonGrievance = this.handleUploadButtonGrievance.bind(
      this
    );
    this.handleEnquiryDateChange = this.handleEnquiryDateChange.bind(this);
    this.handleSubmitEnquery = this.handleSubmitEnquery.bind(this);
    this.handleOtherDetailsEnquiryChange = this.handleOtherDetailsEnquiryChange.bind(
      this
    );
    this.handleCommendationSubmit = this.handleCommendationSubmit.bind(this);
    this.handleCommendationStaffNameChange = this.handleCommendationStaffNameChange.bind(
      this
    );
    this.handleCommendationOfficeNameChange = this.handleCommendationOfficeNameChange.bind(
      this
    );
    this.handleCommendationDateChange = this.handleCommendationDateChange.bind(
      this
    );
    this.handleCommendationReasonChange = this.handleCommendationReasonChange.bind(
      this
    );
  }

  //   handleChange(event) {
  //     this.setState({
  //       value: event.target.value
  //     });

  //     console.log(event.target.value);
  //   }

  handleSubmitGrievance(event) {
    event.preventDefault();

    const grievance = {
      clientNumber: this.props.clientNumber,
      clientName: this.props.clientName,
      IdNumber: this.props.IdNumber,
      phoneContact: this.props.phoneContact,
      emailAddress: this.props.emailAddress,
      IdType: this.props.IdType,
      region: this.props.region,
      office: this.props.office,
      SubCategory: this.state.SubCategory,
      LocationOfIncident: this.state.LocationOfIncident,
      typeofIncident: this.state.typeofIncident,
      timeofIncident: this.state.timeofIncident,
      incidentArea: this.state.incidentArea,
      vehicleNumber: this.state.vehicleNumber,
      incidentDate: this.state.incidentDate,
      otherDetails: this.state.otherDetails,
      declaration: this.state.declaration
    };

    console.log(grievance);

    var a, b, c, d, e, f, g, h;

    a = this.validateClientNumber(grievance.clientNumber);
    b = this.validateClientName(grievance.clientName);
    c = this.validateIdNumber(grievance.IdNumber);
    d = this.validateIdType(grievance.IdType);
    e = this.validatePhoneContact(grievance.phoneContact);
    f = this.validateEmailAddress(grievance.emailAddress);
    g = this.validateRegion(grievance.region);
    h = this.validateOffice(grievance.office);

    if (!a && !b && !c && !d && !e && !f && !g && !h) {
      console.log("a : " + a);
      console.log("b : " + b);
      console.log("c : " + c);
      console.log("d : " + d);
      console.log("e : " + e);
      console.log("f : " + f);
      console.log("g : " + g);
      console.log("h : " + h);

      Axios.post("http://localhost:2567/server/grievance", {
        clientNumber: grievance.clientNumber,
        clientName: grievance.clientName,
        IdNumber: grievance.IdNumber,
        phoneContact: grievance.phoneContact,
        emailAddress: grievance.emailAddress,
        IdType: grievance.IdType,
        region: grievance.region,
        office: grievance.office,
        SubCategory: grievance.SubCategory,
        LocationOfIncident: grievance.LocationOfIncident,
        typeofIncident: grievance.typeofIncident,
        timeofIncident: grievance.timeofIncident,
        incidentArea: grievance.incidentArea,
        vehicleNumber: grievance.vehicleNumber,
        incidentDate: grievance.incidentDate,
        otherDetails: grievance.otherDetails,
        declaration: grievance.declaration
      }).then(response => {
        console.log(response);
        console.log(response.data);
      });
    }

    // console.log(grv);

    // Axios.post("http://localhost:2567/server/grievance", {
    //   clientNumber: grievance.clientNumber,
    //   clientName: grievance.clientName,
    //   IdNumber: grievance.IdNumber,
    //   phoneContact: grievance.phoneContact,
    //   emailAddress: grievance.emailAddress,
    //   IdType: grievance.IdType,
    //   region: grievance.region,
    //   office: grievance.office,
    //   SubCategory: grievance.SubCategory,
    //   LocationOfIncident: grievance.LocationOfIncident,
    //   typeofIncident: grievance.typeofIncident,
    //   timeofIncident: grievance.timeofIncident,
    //   incidentArea: grievance.incidentArea,
    //   vehicleNumber: grievance.vehicleNumber,
    //   incidentDate: grievance.incidentDate,
    //   otherDetails: grievance.otherDetails,
    //   declaration: grievance.declaration
    // }).then(response => {
    //   console.log(response);
    //   console.log(response.data);
    // });

    this.handleUploadButtonGrievance();
    this.setState({ requestType: 3 });
    // window.location.reload();
  }

  validateClientNumber(value) {
    if (value === "") {
      console.log("Empty Client Number" + value);
      this.setState({ errorMessageClientNumber: "Empty Client Number" });
      return true;
    } else {
      if (isNaN(value)) {
        console.log("Alphabets present in Client Number" + value);
        this.setState({
          errorMessageClientNumber: "Alphabets present in Client Number",
          clientNumber: ""
        });
        return true;
      } else {
        console.log("all good");
        this.setState({ errorMessageClientNumber: "" });
        return false;
      }
    }
  }

  validatePhoneContact(value) {
    if (value === "") {
      console.log("Empty Phone Contact" + value);
      this.setState({
        errorMessagePhoneContact: "Empty Phone Contact",
        phoneContact: ""
      });
      return true;
    } else {
      if (isNaN(value)) {
        console.log("Alphabets present in Phone Contact" + value);
        this.setState({
          errorMessagePhoneContact: "Alphabets present in Phone Contact"
        });
        return true;
      } else {
        console.log("all good");
        this.setState({ errorMessagePhoneContact: "" });
        return false;
      }
    }
  }

  validateClientName(value) {
    if (value === "") {
      console.log("Empty Client Name");
      this.setState({ errorMessageClientName: "Empty Client Name" });
      return true;
    } else {
      console.log("all good");
      this.setState({ errorMessageClientName: "" });
      return false;
    }
  }

  validateIdNumber(value) {
    if (value === "") {
      console.log("Empty ID Number");
      this.setState({ errorMessageIDNumber: "Empty ID Number" });
      return true;
    } else {
      console.log("all good");
      this.setState({ errorMessageIDNumber: "" });
      return false;
    }
  }

  validateIdType(value) {
    if (value === "") {
      console.log("Empty ID Type");
      this.setState({ errorMessageIDType: "Empty ID Type" });
      return true;
    } else {
      console.log("all good");
      this.setState({ errorMessageIDType: "" });
      return false;
    }
  }

  validateEmailAddress(value) {
    if (value === "") {
      console.log("Empty Email Address");
      this.setState({ errorMessageEmailAddress: "Empty Email Address" });
      return true;
    } else {
      console.log("all good");
      this.setState({ errorMessageEmailAddress: "" });
      return false;
    }
  }

  validateRegion(value) {
    if (value === "") {
      console.log("Empty Region");
      this.setState({ errorMessageRegion: "Empty Region" });
      return true;
    } else {
      console.log("all good");
      this.setState({ errorMessageRegion: "" });
      return false;
    }
  }

  validateOffice(value) {
    if (value === "") {
      console.log("Empty Office");
      this.setState({ errorMessageOffice: "Empty Office" });
      return true;
    } else {
      console.log("all good");
      this.setState({ errorMessageOffice: "" });
      return false;
    }
  }

  handleSubmitEnquery(event) {
    event.preventDefault();

    const enquiry = {
      clientNumber: this.props.clientNumber,
      clientName: this.props.clientName,
      IdNumber: this.props.IdNumber,
      phoneContact: this.props.phoneContact,
      emailAddress: this.props.emailAddress,
      IdType: this.props.IdType,
      region: this.props.region,
      office: this.props.office,
      dateOfEnquiry: this.state.dateOfEnquiry,
      otherDetailsEnquiry: this.state.otherDetailsEnquiry,
      declaration: this.state.declaration
    };

    console.log(enquiry);

    var a, b, c, d, e, f, g, h;

    a = this.validateClientNumber(enquiry.clientNumber);
    b = this.validateClientName(enquiry.clientName);
    c = this.validateIdNumber(enquiry.IdNumber);
    d = this.validateIdType(enquiry.IdType);
    e = this.validatePhoneContact(enquiry.phoneContact);
    f = this.validateEmailAddress(enquiry.emailAddress);
    g = this.validateRegion(enquiry.region);
    h = this.validateOffice(enquiry.office);

    if (!a && !b && !c && !d && !e && !f && !g && !h) {
      console.log("a : " + a);
      console.log("b : " + b);
      console.log("c : " + c);
      console.log("d : " + d);
      console.log("e : " + e);
      console.log("f : " + f);
      console.log("g : " + g);
      console.log("h : " + h);

      Axios.post("http://localhost:2567/server/enquiry", {
        clientNumber: enquiry.clientNumber,
        clientName: enquiry.clientName,
        IdNumber: enquiry.IdNumber,
        phoneContact: enquiry.phoneContact,
        emailAddress: enquiry.emailAddress,
        IdType: enquiry.IdType,
        region: enquiry.region,
        office: enquiry.office,
        dateOfEnquiry: enquiry.dateOfEnquiry,
        otherDetailsEnquiry: enquiry.otherDetailsEnquiry,
        declaration: enquiry.declaration
      }).then(response => {
        console.log(response);
        console.log(response.data);
      });
    }
    this.handleUploadButtonGrievance();
    this.setState({ requestType: 1 });
  }

  handleCommendationSubmit(event) {
    event.preventDefault();

    const commendation = {
      clientNumber: this.props.clientNumber,
      clientName: this.props.clientName,
      IdNumber: this.props.IdNumber,
      phoneContact: this.props.phoneContact,
      emailAddress: this.props.emailAddress,
      IdType: this.props.IdType,
      region: this.props.region,
      office: this.props.office,
      commendationStaffName: this.state.commendationStaffName,
      commendationOfficeName: this.state.commendationOfficeName,
      commendationDate: this.state.commendationDate,
      commendationReason: this.state.commendationReason,
      declaration: this.state.declaration
    };

    console.log(commendation);

    var a, b, c, d, e, f, g, h;

    a = this.validateClientNumber(commendation.clientNumber);
    b = this.validateClientName(commendation.clientName);
    c = this.validateIdNumber(commendation.IdNumber);
    d = this.validateIdType(commendation.IdType);
    e = this.validatePhoneContact(commendation.phoneContact);
    f = this.validateEmailAddress(commendation.emailAddress);
    g = this.validateRegion(commendation.region);
    h = this.validateOffice(commendation.office);

    if (!a && !b && !c && !d && !e && !f && !g && !h) {
      console.log("a : " + a);
      console.log("b : " + b);
      console.log("c : " + c);
      console.log("d : " + d);
      console.log("e : " + e);
      console.log("f : " + f);
      console.log("g : " + g);
      console.log("h : " + h);

      Axios.post("http://localhost:2567/server/commendation", {
        clientNumber: commendation.clientNumber,
        clientName: commendation.clientName,
        IdNumber: commendation.IdNumber,
        phoneContact: commendation.phoneContact,
        emailAddress: commendation.emailAddress,
        IdType: commendation.IdType,
        region: commendation.region,
        office: commendation.office,
        commendationStaffName: commendation.commendationStaffName,
        commendationOfficeName: commendation.commendationOfficeName,
        commendationDate: commendation.commendationDate,
        commendationReason: commendation.commendationReason,
        declaration: commendation.declaration
      }).then(response => {
        console.log(response);
        console.log(response.data);
        alert("Commendation Submitted Successfully");
      });
    }

    this.handleUploadButtonGrievance();
    this.setState({ requestType: 2 });
  }

  handleChange(event, { value }) {
    this.setState({
      requestType: value
    });
    console.log(value);
    this.props.getNewUser();

    console.log(this.props.clientNumber);
    //this.handleStateUpdate(this.props.clientNumber);
  }

  handleStateUpdate(value) {
    this.setState({ clientNumber: value });

    console.log(this.state.clientNumber);
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

  handleRegionChange(event, { value }) {
    console.log(value);
    this.setState({
      regionValue: value
    });
  }

  handleSubCategoryChange(event, { value }) {
    console.log(value);
    this.setState({
      SubCategory: value
    });
  }

  handleLocationOfIncidentChange(event, { value }) {
    console.log(value);
    this.setState({
      LocationOfIncident: value
    });
  }

  handleTypeOfincident(event) {
    console.log(event.target.value);
    this.setState({ typeofIncident: event.target.value });
  }

  handleTimeofIncident(value) {
    console.log(value);
    this.setState({ timeofIncident: value });
  }

  handleIncidentArea(event) {
    console.log(event.target.value);
    this.setState({ incidentArea: event.target.value });
  }

  handleVehicleNumberChange(event) {
    console.log(event.target.value);
    this.setState({ vehicleNumber: event.target.value });
  }

  handleIncidentDateChange(date) {
    console.log(date);
    this.setState({ incidentDate: date });
  }

  handleOtherDetailsChange(event, { value }) {
    console.log(event.target.value);
    this.setState({ otherDetails: event.target.value });
  }

  handleOtherDetailsEnquiryChange(event, { value }) {
    console.log(event.target.value);
    this.setState({ otherDetailsEnquiry: event.target.value });
  }

  handleEnquiryDateChange(date) {
    console.log(date);
    this.setState({ dateOfEnquiry: date });
  }

  handleCheckBoxChange() {
    this.setState({ isChecked: !this.state.isChecked });

    if (this.state.isChecked === true) {
      console.log("Checked");
      this.setState({ declaration: 1 });
    } else {
      console.log("Not Checked");
      this.setState({ declaration: 0 });
    }
  }

  handleImageFileGrievanceChange(event) {
    console.log(event.target.files[0]);
    this.setState({ file: event.target.files[0] });
  }

  handleUploadButtonGrievance() {
    const formData = new FormData();
    console.log(this.state.file);
    formData.append("myImage", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    if (this.state.file === "") {
      console.log("No Need to upload");
    } else {
      Axios.post("http://localhost:2567/server/upload", formData, config)
        .then(response => {
          alert("The File is successfully uploaded");
        })
        .catch(error => {});
    }
  }

  handleCommendationStaffNameChange(event) {
    console.log(event.target.value);
    this.setState({ commendationStaffName: event.target.value });
  }

  handleCommendationOfficeNameChange(event) {
    console.log(event.target.value);
    this.setState({ commendationOfficeName: event.target.value });
  }

  handleCommendationDateChange(date) {
    console.log(date);
    this.setState({ commendationDate: date });
  }

  handleCommendationReasonChange(event) {
    console.log(event.target.value);
    this.setState({
      commendationReason: event.target.value
    });
  }

  render() {
    //console.log(this.state.requestType);

    //Enquiry
    if (this.state.requestType === 1) {
      return (
        <Grid columns={2} divided padded stackable>
          <Grid.Row stackable>
            <Grid.Column>
              <Dropdown
                placeholder="Type of Communication"
                selection
                fluid
                options={this.state.options}
                onChange={this.handleChange}
                selected="Grievance"
              />
            </Grid.Column>
            <Grid.Column padded>
              <Form>
                <Form.Field>
                  <Grid columns={2} divided stackable>
                    <Grid.Row columns={2} padded>
                      <Grid.Column>
                        <label size="big" className="flabel">
                          Date of Enquiry :
                        </label>
                      </Grid.Column>
                      <Grid.Column>
                        <Pickerfordate
                          selected={this.state.dateOfEnquiry}
                          onChange={this.handleEnquiryDateChange}
                        />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <TextArea
                          rows={3}
                          placeholder="Enquiry Details"
                          fluid
                          onChange={this.handleOtherDetailsEnquiryChange}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row padded>
            <Grid.Column padded>
              <Grid.Row padded>
                <Checkbox
                  label="I hereby declare that all the information provided is true .
                    The information you give us in relation to this communication may be given to the police ,
                    law enforcement officers or any licensing body. "
                  padded
                  onChange={this.handleCheckBoxChange}
                />
              </Grid.Row>
              <Form.Field padded>
                <Label as="a" basic color="red" pointing="right">
                  Note
                </Label>
                <span>
                  Its Mandatory to fill in all the information that is required
                  by the Land Transport Authority.
                </span>
              </Form.Field>
              <Form.Field
                onSubmit={this.handleUploadButtonGrievance}
                padded
                inline
              >
                {/* <Header as="h3">File Upload</Header> */}
                <Input
                  type="file"
                  name="myImage"
                  onChange={this.handleImageFileGrievanceChange}
                />
                {/* <Button
                  type="submit"
                  color="google plus"
                  onClick={this.handleUploadButtonGrievance}
                >
                  Upload
                </Button> */}
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Button
                color="orange"
                type="submit"
                padded
                onClick={this.handleSubmitEnquery}
              >
                Submit
              </Button>
              <Button
                color="green"
                type="submit"
                padded
                onClick={() => window.location.reload()}
              >
                Reset
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
    if (this.state.requestType === 2) {
      return (
        <Grid stackable columns={2} divided padded>
          <Grid.Row columns={2} stackable>
            <Grid.Column stackable>
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
              <label size="big" className="flabel">
                Commendation Date :
              </label>
              <Pickerfordate
                stackable
                selected={this.state.commendationDate}
                onChange={this.handleCommendationDateChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stackable>
            <Grid.Column stackable>
              <Grid columns={2} divided stackable>
                <Labelinputfield
                  label="Staff Name :"
                  placeholder="Staff Name"
                  onChange={this.handleCommendationStaffNameChange}
                />

                <Labelinputfield
                  label="Office Name/Area :*"
                  placeholder="Office/Area"
                  onChange={this.handleCommendationOfficeNameChange}
                />
              </Grid>
            </Grid.Column>
            <Grid.Column stackable>
              <Form>
                <Form.Field>
                  <Grid divided stackable>
                    <Grid.Row stackable>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                        stackable
                      >
                        <TextArea
                          rows={5}
                          placeholder="Reason for the Commendation:*"
                          onChange={this.handleCommendationReasonChange}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row padded>
            <Grid.Column padded>
              <Grid.Row padded>
                <Checkbox
                  label="I hereby declare that all the information provided is true .
                    The information you give us in relation to this communication may be given to the police ,
                    law enforcement officers or any licensing body. "
                  padded
                  onChange={this.handleCheckBoxChange}
                />
              </Grid.Row>
              <Form.Field padded>
                <Label as="a" basic color="red" pointing="right">
                  Note
                </Label>
                <span>
                  Its Mandatory to fill in all the information that is required
                  by the Land Transport Authority.
                </span>
              </Form.Field>
              <Form.Field
                onSubmit={this.handleUploadButtonGrievance}
                padded
                inline
              >
                {/* <Header as="h3">File Upload</Header> */}
                <Input
                  type="file"
                  name="myImage"
                  onChange={this.handleImageFileGrievanceChange}
                />
                {/* <Button
                  type="submit"
                  color="google plus"
                  onClick={this.handleUploadButtonGrievance}
                >
                  Upload
                </Button> */}
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Button
                color="orange"
                type="submit"
                padded
                onClick={this.handleCommendationSubmit}
              >
                Submit
              </Button>
              <Button
                color="green"
                type="submit"
                padded
                onClick={() => window.location.reload()}
              >
                Reset
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
    if (this.state.requestType === 3) {
      //Complain
      return (
        <Grid stackable columns={2} divided padded>
          <label className="ferror">
            {this.state.errorMessageClientNumber}
          </label>
          <label className="ferror">{this.state.errorMessageClientName}</label>
          <label className="ferror">{this.state.errorMessageIDNumber}</label>
          <label className="ferror">{this.state.errorMessageIDType}</label>
          <label className="ferror">
            {this.state.errorMessagePhoneContact}
          </label>
          <label className="ferror">
            {this.state.errorMessageEmailAddress}
          </label>
          <label className="ferror">{this.state.errorMessageRegion}</label>
          <label className="ferror">{this.state.errorMessageOffice}</label>
          <Grid.Row stackable>
            <Grid.Column stackable>
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
            <Grid.Column stackable>
              <SubCategory
                placeholder="Sub-Category"
                onChange={this.handleSubCategoryChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stackable>
            <Grid.Column stackable>
              <Form>
                <Grid columns={2} divided stackable>
                  <Labelinputfield
                    label="Type of Incident :*"
                    placeholder="Type of Incident"
                    onChange={this.handleTypeOfincident}
                  />
                  <Grid.Row columns={2}>
                    <Grid.Column
                      padded
                      verticalAlign="middle"
                      textAlign="center"
                    >
                      <label className="flabel">Time of Incident :</label>
                    </Grid.Column>
                    <Grid.Column padded fluid>
                      <DatePicker
                        selected={this.state.timeofIncident}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={1}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        onChange={date => this.handleTimeofIncident(date)}
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Labelinputfield
                    label="Incident Area:*"
                    placeholder="Incident Area"
                    onChange={this.handleIncidentArea}
                  />
                </Grid>
              </Form>
            </Grid.Column>
            <Grid.Column stackable>
              <Form stackable>
                <Form.Field stackable>
                  <Grid columns={2} divided stackable>
                    <Labelinputfield
                      label="Vehicle Number"
                      placeholder="Vehicle Number"
                      onChange={this.handleVehicleNumberChange}
                    />
                    <Grid.Row columns={3} padded stackable>
                      <Grid.Column>
                        <Regions
                          placeholder="Location"
                          onChange={this.handleLocationOfIncidentChange}
                        />
                      </Grid.Column>
                      <Grid.Column stackable>
                        <label className="flabel">Incident Date:</label>
                      </Grid.Column>
                      <Grid.Column>
                        <Pickerfordate
                          selected={this.state.incidentDate}
                          onChange={this.handleIncidentDateChange}
                        />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <TextArea
                          rows={3}
                          placeholder="Other Details*"
                          fluid
                          onChange={this.handleOtherDetailsChange}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row padded>
            <Grid.Column padded>
              <Grid.Row padded>
                <Checkbox
                  label="I hereby declare that all the information provided is true .
                    The information you give us in relation to this communication may be given to the police ,
                    law enforcement officers or any licensing body. "
                  padded
                  onChange={this.handleCheckBoxChange}
                />
              </Grid.Row>
              <Form.Field padded>
                <Label as="a" basic color="red" pointing="right">
                  Note
                </Label>
                <span>
                  Its Mandatory to fill in all the information that is required
                  by the Land Transport Authority.
                </span>
              </Form.Field>
              <Form.Field
                onSubmit={this.handleUploadButtonGrievance}
                padded
                inline
              >
                {/* <Header as="h3">File Upload</Header> */}
                <Input
                  type="file"
                  name="myImage"
                  onChange={this.handleImageFileGrievanceChange}
                />
                {/* <Button
                  type="submit"
                  color="google plus"
                  onClick={this.handleUploadButtonGrievance}
                >
                  Upload
                </Button> */}
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Button
                color="orange"
                type="submit"
                padded
                onClick={this.handleSubmitGrievance}
              >
                Submit
              </Button>
              <Button
                color="green"
                type="submit"
                padded
                onClick={() => window.location.reload()}
              >
                Reset
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
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

// function mapStateToProps(state) {
//   return {
//     CustomerDetail: state.CustomerDetail
//   };
// }

export default connect(mapStateToProps, { getNewUser })(TypeofCommunication);
