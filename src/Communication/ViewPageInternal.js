import React, { Component } from "react";
import {
  Table,
  Segment,
  Modal,
  Form,
  Container,
  Menu
} from "semantic-ui-react";
import Axios from "axios";
import "./comm.css";
import FormInputReadOnly from "./components/FormInputReadOnly";
import Moment from "react-moment";
import logo from "../LTAFIJIlogo.png";

class ViewPageInternal extends Component {
  state = { activeItem: "Grievance" };

  constructor(props) {
    super(props);

    this.state = {
      grievances: [],
      commendations: [],
      enquiries: [],
      modalOpen: false,
      CommunicationID: "",
      CommunicationType: "",
      clientNumber: "",
      clientName: "",
      IdNumber: "",
      phoneContact: "",
      emailAddress: "",
      IdType: "",
      region: "",
      office: "",
      SubCategory: "",
      LocationOfIncident: "",
      typeofIncident: "",
      timeofIncident: "",
      incidentArea: "",
      vehicleNumber: "",
      incidentDate: "",
      otherDetails: "",
      declaration: "",
      CommendationID: "",
      StaffName: "",
      CommendationDate: "",
      CommendationReason: "",
      QueryID: "",
      CustomerNumber: "",
      CustomerName: "",
      PhoneContact: "",
      EmailAddress: "",
      Region: "",
      OfficeName: "",
      IDType: "",
      IDNumber: "",
      QueryDetails: "",
      QueryDate: ""
    };

    this.ModalClose = this.ModalClose.bind(this);
    this.ModalOpen = this.ModalOpen.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.timeExtract = this.timeExtract.bind(this);
    this.dateExtract = this.dateExtract.bind(this);
    this.handleRowCommendationClick = this.handleRowCommendationClick.bind(
      this
    );
    this.handleRowEnquiryClick = this.handleRowEnquiryClick.bind(this);
  }

  timeExtract(time) {
    return <Moment format="D MMM YYYY">{time}</Moment>;
  }

  dateExtract(date) {
    let newDate = new Date();
    date = newDate.getDate(date);
    return <Table.Cell>{date}</Table.Cell>;
  }

  ModalClose() {
    this.setState({ modalOpen: false });
  }

  ModalOpen() {
    this.setState({ modalOpen: true });
  }

  handleRowClick(grievance) {
    console.log(grievance);
    this.setState({
      CommunicationID: grievance.CommunicationID,
      CommunicationType: grievance.CommunicationType,
      clientNumber: grievance.CustomerNumber,
      clientName: grievance.CustomerName,
      IdNumber: grievance.IDNumber,
      phoneContact: grievance.PhoneContact,
      emailAddress: grievance.EmailAddress,
      IdType: grievance.IDType,
      region: grievance.Region,
      office: grievance.OfficeName,
      SubCategory: grievance.SubCategory,
      LocationOfIncident: grievance.IncidentArea,
      typeofIncident: grievance.IncidentType,
      timeofIncident: grievance.IncidentTime,
      incidentArea: grievance.IncidentArea,
      vehicleNumber: grievance.VehicleNumber,
      incidentDate: grievance.IncidentDate,
      otherDetails: grievance.OtherDetails,
      declaration: grievance.declaration,
      linkToFile: grievance.linkToFile
    });
    this.ModalOpen();
  }

  handleRowCommendationClick(commendation) {
    console.log(commendation);
    this.setState({
      CommunicationID: commendation.CommendationID,
      CommunicationType: commendation.CommunicationType,
      clientNumber: commendation.CustomerNumber,
      clientName: commendation.CustomerName,
      IdNumber: commendation.IDNumber,
      phoneContact: commendation.PhoneContact,
      emailAddress: commendation.EmailAddress,
      IdType: commendation.IDType,
      region: commendation.Region,
      office: commendation.OfficeName
    });
    this.ModalOpen();
  }

  handleRowEnquiryClick(enquiry) {
    console.log(enquiry);
    this.setState({
      QueryID: enquiry.QueryID,
      CustomerNumber: enquiry.CustomerNumber,
      CustomerName: enquiry.CustomerName,
      PhoneContact: enquiry.PhoneContact,
      EmailAddress: enquiry.EmailAddress,
      Region: enquiry.Region,
      OfficeName: enquiry.OfficeName,
      IDType: enquiry.IDType,
      IDNumber: enquiry.IDNumber,
      CommunicationType: enquiry.CommunicationType,
      QueryDetails: enquiry.QueryDetails,
      QueryDate: enquiry.QueryDate
    });
    this.ModalOpen();
  }

  componentWillMount() {
    Axios.get("/server/grievances")
      .then(response => {
        this.setState({ grievances: response.data });
        console.log(response.data);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

    Axios.get("/server/commendation")
      .then(response => {
        this.setState({ commendations: response.data });
        console.log(response.data);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

    Axios.get("/server/enquiries")
      .then(response => {
        this.setState({ enquiries: response.data });
        console.log(response.data);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  viewType(activeItem) {
    if (activeItem === "Grievance") {
      return (
        <div>
          {/* <Segment>
            <Menu inverted widths={3} color="grey" stackable>
              <Menu.Item
                name="Grievance"
                active={activeItem === "Grievance"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Commendation"
                active={activeItem === "Commendation"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Enquiry"
                active={activeItem === "Enquiry"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Segment> */}
          <Segment compact textAlign="center">
            <Table celled color="orange" key="orange" size="small">
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell sorted="descending">
                    Grievance ID
                  </Table.HeaderCell>
                  <Table.HeaderCell>CustomerNumber</Table.HeaderCell>
                  <Table.HeaderCell>CustomerName</Table.HeaderCell>
                  <Table.HeaderCell>CommunicationType</Table.HeaderCell>
                  <Table.HeaderCell>IncidentTime</Table.HeaderCell>
                  <Table.HeaderCell>IncidentArea</Table.HeaderCell>
                  <Table.HeaderCell>IncidentDate</Table.HeaderCell>
                  <Table.HeaderCell>SubCategory</Table.HeaderCell>
                  <Table.HeaderCell>Vehicle</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.grievances.map(gr => (
                  <Table.Row
                    key={gr.CommunicationID}
                    onClick={this.handleRowClick.bind(this, gr)}
                  >
                    <Table.Cell>{gr.CommunicationID}</Table.Cell>
                    <Table.Cell>{gr.CustomerNumber}</Table.Cell>
                    <Table.Cell>{gr.CustomerName}</Table.Cell>
                    <Table.Cell>{gr.CommunicationType}</Table.Cell>
                    <Table.Cell>{gr.IncidentTime}</Table.Cell>
                    <Table.Cell>{gr.IncidentArea}</Table.Cell>
                    <Table.Cell>{gr.IncidentDate}</Table.Cell>
                    <Table.Cell>{gr.SubCategory}</Table.Cell>
                    <Table.Cell>{gr.VehicleNumber}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Modal
              size="mini"
              open={this.state.modalOpen}
              onClose={this.ModalClose}
              closeIcon
            >
              <Modal.Header>Details</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Form>
                    <FormInputReadOnly
                      label="Grievance ID"
                      value={this.state.CommunicationID}
                    />
                    <FormInputReadOnly
                      label="Customer Number"
                      value={this.state.clientNumber}
                    />
                    <FormInputReadOnly
                      label="Customer Name"
                      value={this.state.clientName}
                    />
                    <FormInputReadOnly
                      label="Customer ID Number"
                      value={this.state.IdNumber}
                    />
                    <FormInputReadOnly
                      label="IDType"
                      value={this.state.IdType}
                    />
                    <FormInputReadOnly
                      label="Phone Contact"
                      value={this.state.phoneContact}
                    />
                    <FormInputReadOnly
                      label="Email Address"
                      value={this.state.emailAddress}
                    />

                    <FormInputReadOnly
                      label="Region"
                      value={this.state.region}
                    />
                    <FormInputReadOnly
                      label="Office"
                      value={this.state.office}
                    />
                    <FormInputReadOnly
                      label="Sub Category"
                      value={this.state.SubCategory}
                    />
                    <FormInputReadOnly
                      label="Location"
                      value={this.state.LocationOfIncident}
                    />
                    <FormInputReadOnly
                      label="Type of Incident"
                      value={this.state.typeofIncident}
                    />
                    <FormInputReadOnly
                      label="Time of Incident"
                      value={this.state.timeofIncident}
                    />
                    <FormInputReadOnly
                      label="Incident Area"
                      value={this.state.incidentArea}
                    />
                    <FormInputReadOnly
                      label="Vehicle Number"
                      value={this.state.vehicleNumber}
                    />
                    <FormInputReadOnly
                      label="Incident Date"
                      value={this.state.incidentDate}
                    />
                    <FormInputReadOnly
                      label="Other Details"
                      value={this.state.otherDetails}
                    />
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions></Modal.Actions>
            </Modal>
          </Segment>
        </div>
      );
    }
    if (activeItem === "Commendation") {
      return (
        <div>
          {/* <Segment>
            <Menu inverted widths={3} color="grey" stackable>
              <Menu.Item
                name="Grievance"
                active={activeItem === "Grievance"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Commendation"
                active={activeItem === "Commendation"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Enquiry"
                active={activeItem === "Enquiry"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Segment> */}
          <Segment compact textAlign="center">
            <Table celled color="orange" key="orange" size="small">
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell sorted="descending">
                    Commendation ID
                  </Table.HeaderCell>
                  <Table.HeaderCell>Customer Number</Table.HeaderCell>
                  <Table.HeaderCell>Customer Name</Table.HeaderCell>
                  <Table.HeaderCell>Communication Type</Table.HeaderCell>
                  <Table.HeaderCell>Commendation Date</Table.HeaderCell>
                  <Table.HeaderCell>Commendation Reason</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.commendations.map(gr => (
                  <Table.Row
                    key={gr.CommendationID}
                    onClick={this.handleRowCommendationClick.bind(this, gr)}
                  >
                    <Table.Cell>{gr.CommendationID}</Table.Cell>
                    <Table.Cell>{gr.CustomerNumber}</Table.Cell>
                    <Table.Cell>{gr.CustomerName}</Table.Cell>
                    <Table.Cell>{gr.CommunicationType}</Table.Cell>
                    <Table.Cell>{gr.CommendationDate}</Table.Cell>
                    <Table.Cell>{gr.CommendationReason}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Modal
              size="mini"
              open={this.state.modalOpen}
              onClose={this.ModalClose}
              closeIcon
            >
              <Modal.Header>Details</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Form>
                    <FormInputReadOnly
                      label="Grievance ID"
                      value={this.state.CommunicationID}
                    />
                    <FormInputReadOnly
                      label="Customer Number"
                      value={this.state.clientNumber}
                    />
                    <FormInputReadOnly
                      label="Customer Name"
                      value={this.state.clientName}
                    />
                    <FormInputReadOnly
                      label="Customer ID Number"
                      value={this.state.IdNumber}
                    />
                    <FormInputReadOnly
                      label="IDType"
                      value={this.state.IdType}
                    />
                    <FormInputReadOnly
                      label="Phone Contact"
                      value={this.state.phoneContact}
                    />
                    <FormInputReadOnly
                      label="Email Address"
                      value={this.state.emailAddress}
                    />

                    <FormInputReadOnly
                      label="Region"
                      value={this.state.region}
                    />
                    <FormInputReadOnly
                      label="Office"
                      value={this.state.office}
                    />
                    <FormInputReadOnly
                      label="Sub Category"
                      value={this.state.SubCategory}
                    />
                    <FormInputReadOnly
                      label="Location"
                      value={this.state.LocationOfIncident}
                    />
                    <FormInputReadOnly
                      label="Type of Incident"
                      value={this.state.typeofIncident}
                    />
                    <FormInputReadOnly
                      label="Time of Incident"
                      value={this.state.timeofIncident}
                    />
                    <FormInputReadOnly
                      label="Incident Area"
                      value={this.state.incidentArea}
                    />
                    <FormInputReadOnly
                      label="Vehicle Number"
                      value={this.state.vehicleNumber}
                    />
                    <FormInputReadOnly
                      label="Incident Date"
                      value={this.state.incidentDate}
                    />
                    <FormInputReadOnly
                      label="Other Details"
                      value={this.state.otherDetails}
                    />
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions></Modal.Actions>
            </Modal>
          </Segment>
        </div>
      );
    }
    if (activeItem === "Enquiry") {
      return (
        <div>
          {/* <Segment>
            <Menu inverted widths={3} color="grey" stackable>
              <Menu.Item
                name="Grievance"
                active={activeItem === "Grievance"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Commendation"
                active={activeItem === "Commendation"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Enquiry"
                active={activeItem === "Enquiry"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Segment> */}
          <Segment compact textAlign="center">
            <Table celled color="orange" key="orange" size="small">
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell sorted="descending">
                    Enquiry ID
                  </Table.HeaderCell>
                  <Table.HeaderCell>Customer Number</Table.HeaderCell>
                  <Table.HeaderCell>Customer Name</Table.HeaderCell>
                  <Table.HeaderCell>Communication Type</Table.HeaderCell>
                  <Table.HeaderCell>Enquiry Date</Table.HeaderCell>
                  <Table.HeaderCell>Enquiry Reason</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.enquiries.map(gr => (
                  <Table.Row
                    key={gr.QueryID}
                    onClick={this.handleRowEnquiryClick.bind(this, gr)}
                  >
                    <Table.Cell>{gr.QueryID}</Table.Cell>
                    <Table.Cell>{gr.CustomerNumber}</Table.Cell>
                    <Table.Cell>{gr.CustomerName}</Table.Cell>
                    <Table.Cell>{gr.CommunicationType}</Table.Cell>
                    <Table.Cell>{gr.QueryDate}</Table.Cell>
                    <Table.Cell>{gr.QueryDetails}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Modal
              size="mini"
              open={this.state.modalOpen}
              onClose={this.ModalClose}
              closeIcon
            >
              <Modal.Header>Details</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Form>
                    <FormInputReadOnly
                      label="Grievance ID"
                      value={this.state.CommunicationID}
                    />
                    <FormInputReadOnly
                      label="Customer Number"
                      value={this.state.clientNumber}
                    />
                    <FormInputReadOnly
                      label="Customer Name"
                      value={this.state.clientName}
                    />
                    <FormInputReadOnly
                      label="Customer ID Number"
                      value={this.state.IdNumber}
                    />
                    <FormInputReadOnly
                      label="IDType"
                      value={this.state.IdType}
                    />
                    <FormInputReadOnly
                      label="Phone Contact"
                      value={this.state.phoneContact}
                    />
                    <FormInputReadOnly
                      label="Email Address"
                      value={this.state.emailAddress}
                    />

                    <FormInputReadOnly
                      label="Region"
                      value={this.state.region}
                    />
                    <FormInputReadOnly
                      label="Office"
                      value={this.state.office}
                    />
                    <FormInputReadOnly
                      label="Sub Category"
                      value={this.state.SubCategory}
                    />
                    <FormInputReadOnly
                      label="Location"
                      value={this.state.LocationOfIncident}
                    />
                    <FormInputReadOnly
                      label="Type of Incident"
                      value={this.state.typeofIncident}
                    />
                    <FormInputReadOnly
                      label="Time of Incident"
                      value={this.state.timeofIncident}
                    />
                    <FormInputReadOnly
                      label="Incident Area"
                      value={this.state.incidentArea}
                    />
                    <FormInputReadOnly
                      label="Vehicle Number"
                      value={this.state.vehicleNumber}
                    />
                    <FormInputReadOnly
                      label="Incident Date"
                      value={this.state.incidentDate}
                    />
                    <FormInputReadOnly
                      label="Other Details"
                      value={this.state.otherDetails}
                    />
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions></Modal.Actions>
            </Modal>
          </Segment>
        </div>
      );
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, activeIndex } = this.state;
    return (
      <Container className="viewpage">
        <img src={logo} width="150" height="50" />

        <Segment>
          <Menu inverted widths={3} color="grey" stackable>
            <Menu.Item
              name="Grievance"
              active={activeItem === "Grievance"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Commendation"
              active={activeItem === "Commendation"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Enquiry"
              active={activeItem === "Enquiry"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
        {this.viewType(activeItem)}
        {/*
        <Segment compact textAlign="center">
          <Table celled color="orange" key="orange" size="small">
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell sorted="descending">
                  Grievance ID
                </Table.HeaderCell>
                <Table.HeaderCell>CustomerNumber</Table.HeaderCell>
                <Table.HeaderCell>CustomerName</Table.HeaderCell>
                <Table.HeaderCell>CommunicationType</Table.HeaderCell>
                <Table.HeaderCell>IncidentTime</Table.HeaderCell>
                <Table.HeaderCell>IncidentArea</Table.HeaderCell>
                <Table.HeaderCell>IncidentDate</Table.HeaderCell>
                <Table.HeaderCell>SubCategory</Table.HeaderCell>
                <Table.HeaderCell>Vehicle</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.grievances.map(gr => (
                <Table.Row
                  key={gr.CommunicationID}
                  onClick={this.handleRowClick.bind(this, gr)}
                >
                  <Table.Cell>{gr.CommunicationID}</Table.Cell>
                  <Table.Cell>{gr.CustomerNumber}</Table.Cell>
                  <Table.Cell>{gr.CustomerName}</Table.Cell>
                  <Table.Cell>{gr.CommunicationType}</Table.Cell>
                  <Table.Cell>{gr.IncidentTime}</Table.Cell>
                  <Table.Cell>{gr.IncidentArea}</Table.Cell>
                  <Table.Cell>{gr.IncidentDate}</Table.Cell>
                  <Table.Cell>{gr.SubCategory}</Table.Cell>
                  <Table.Cell>{gr.VehicleNumber}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Modal
            size="mini"
            open={this.state.modalOpen}
            onClose={this.ModalClose}
            closeIcon
          >
            <Modal.Header>Details</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <FormInputReadOnly
                    label="Grievance ID"
                    value={this.state.CommunicationID}
                  />
                  <FormInputReadOnly
                    label="Customer Number"
                    value={this.state.clientNumber}
                  />
                  <FormInputReadOnly
                    label="Customer Name"
                    value={this.state.clientName}
                  />
                  <FormInputReadOnly
                    label="Customer ID Number"
                    value={this.state.IdNumber}
                  />
                  <FormInputReadOnly label="IDType" value={this.state.IdType} />
                  <FormInputReadOnly
                    label="Phone Contact"
                    value={this.state.phoneContact}
                  />
                  <FormInputReadOnly
                    label="Email Address"
                    value={this.state.emailAddress}
                  />

                  <FormInputReadOnly label="Region" value={this.state.region} />
                  <FormInputReadOnly label="Office" value={this.state.office} />
                  <FormInputReadOnly
                    label="Sub Category"
                    value={this.state.SubCategory}
                  />
                  <FormInputReadOnly
                    label="Location"
                    value={this.state.LocationOfIncident}
                  />
                  <FormInputReadOnly
                    label="Type of Incident"
                    value={this.state.typeofIncident}
                  />
                  <FormInputReadOnly
                    label="Time of Incident"
                    value={this.state.timeofIncident}
                  />
                  <FormInputReadOnly
                    label="Incident Area"
                    value={this.state.incidentArea}
                  />
                  <FormInputReadOnly
                    label="Vehicle Number"
                    value={this.state.vehicleNumber}
                  />
                  <FormInputReadOnly
                    label="Incident Date"
                    value={this.state.incidentDate}
                  />
                  <FormInputReadOnly
                    label="Other Details"
                    value={this.state.otherDetails}
                  />
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions></Modal.Actions>
          </Modal>
        </Segment> */}
      </Container>
    );
  }
}

export default ViewPageInternal;
