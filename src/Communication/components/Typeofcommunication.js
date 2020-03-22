import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewUser } from "../Redux/Actions/UserAction";
import Axios from "axios";
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
      LocationOfIncident: ""
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
      office: this.props.office
    };

    console.log(grievance);

    Axios.post("http://192.168.1.2:2567/server/grievance", {
      clientNumber: grievance.clientNumber,
      clientName: grievance.clientName,
      IdNumber: grievance.IdNumber,
      phoneContact: grievance.phoneContact,
      emailAddress: grievance.emailAddress,
      IdType: grievance.IdType,
      region: grievance.region,
      office: grievance.office
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
            <Grid.Column stackable>
              <Form stackable>
                <Form.Field stackable>
                  <Grid columns={2} divided stackable>
                    <Labelinputfield
                      label="Vehicle Number"
                      placeholder="Vehicle Number"
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
