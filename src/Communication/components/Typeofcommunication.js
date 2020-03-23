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

class TypeofCommunication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { key: 1, text: "Enquery", value: 1 },
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
      otherDetails: ""
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
      otherDetails: this.state.otherDetails
    };

    console.log(grievance);

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
      otherDetails: grievance.otherDetails
    }).then(response => {
      console.log(response);
      console.log(response.data);
    });
  }

  handleChange(event, { value }) {
    this.setState({
      requestType: value
    });
    console.log(value);
    this.props.getNewUser();

    console.log(this.props.clientNumber);
    this.handleStateUpdate(this.props.clientNumber);
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

  render() {
    //console.log(this.state.requestType);

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
              />
            </Grid.Column>
            <Grid.Column padded>
              <Form>
                <Form.Field>
                  <Grid columns={2} divided stackable>
                    <Grid.Row columns={2} padded>
                      <Grid.Column>
                        <Label size="big" className="flabel">
                          Date of Enquiry :*
                        </Label>
                      </Grid.Column>
                      <Grid.Column>
                        <Pickerfordate />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <TextArea rows={3} placeholder="Other Details*" fluid />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>

          <FooterComponent />
        </Grid>
      );
    }
    if (this.state.requestType === 2) {
      return (
        <Grid stackable columns={2} divided padded>
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
              <Pickerfordate stackable />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stackable>
            <Grid.Column stackable>
              <Grid columns={2} divided stackable>
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
                          placeholder="Reason for the Commendation :*"
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <FooterComponent />
        </Grid>
      );
    }
    if (this.state.requestType === 3) {
      //Complain
      return (
        <Grid stackable columns={2} divided padded>
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
                      <label className="flabel">
                        Date and Time of Incident :
                      </label>
                    </Grid.Column>
                    <Grid.Column padded fluid>
                      <DatePicker
                        selected={this.state.currentTime}
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
                          placeholder="Location of Incident"
                          onChange={this.handleLocationOfIncidentChange}
                        />
                      </Grid.Column>
                      <Grid.Column stackable>
                        <label className="flabel">Incident Date:</label>
                      </Grid.Column>
                      <Grid.Column>
                        <Pickerfordate
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
              <Form.Field onSubmit={this.onFormSubmit} padded inline>
                {/* <Header as="h3">File Upload</Header> */}
                <Input type="file" name="myImage" onChange={this.onChange} />
                <Button type="submit" color="google plus">
                  Upload
                </Button>
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
              <Button color="green" type="submit" padded>
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
