import React, { Component } from "react";
import {
  Table,
  Segment,
  Modal,
  Form,
  Container,
  Menu,
  Button,
  Image,
  Grid,
} from "semantic-ui-react";
import Axios from "axios";
import "./comm.css";
import FormInputReadOnly from "./components/FormInputReadOnly";
import Moment from "react-moment";
import logo from "../LTAFIJIlogo.png";
import auth from "./components/auth";
import Officers from "./Redux/data/officers";

class ViewPageInternal extends Component {
  state = { activeItem: "Grievance" };

  constructor(props) {
    super(props);

    this.state = {
      grievances: [],
      commendations: [],
      enquiries: [],
      modalOpen: false,

      //Customer details
      CustomerNumber: "",
      CustomerName: "",
      PhoneContact: "",
      EmailAddress: "",
      CommunicationType: "",
      Region: "",
      OfficeName: "",
      IDType: "",
      IDNumber: "",
      declaration: "",
      linkToFile: "",

      //grievance
      CommunicationID: "",
      IncidentType: "",
      IncidentTime: "",
      IncidentArea: "",
      IncidentDate: "",
      SubCategory: "",
      VehicleNumber: "",
      OtherDetails: "",

      //commendation
      CommendationID: "",
      StaffName: "",
      CommendationDate: "",
      CommendationReason: "",

      //Enquiries
      QueryID: "",
      QueryDetails: "",
      QueryDate: "",

      //Case
      caseID: "",
      caseOpen: [],
      caseClosed: [],
      statusID: "",
      openedBy: "5",
      closedBy: "6",
      isTrue: false,
      assignOfficer: "",
      officerAssigned: "",
    };
    this.ModalClose = this.ModalClose.bind(this);
    this.ModalOpen = this.ModalOpen.bind(this);

    this.timeExtract = this.timeExtract.bind(this);
    this.dateExtract = this.dateExtract.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleRowCommendationClick = this.handleRowCommendationClick.bind(
      this
    );
    this.handleRowEnquiryClick = this.handleRowEnquiryClick.bind(this);
    this.handleCaseStatus = this.handleCaseStatus.bind(this);
    this.isOpen = this.isOpen.bind(this);
    this.isClose = this.isClose.bind(this);
    this.closeButton = this.closeButton.bind(this);
    this.assignOfficerGrievance = this.assignOfficerGrievance.bind(this);
    this.handleAssignButtonOnClick = this.handleAssignButtonOnClick.bind(this);
  }

  assignOfficerGrievance() {
    return (
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Officers
              onChange={(event, { value }) => {
                console.log(value);
                this.setState({ assignOfficer: value });
              }}
              placeholder="Officers"
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              onClick={this.handleAssignButtonOnClick}
              floated="right"
              color="orange"
            >
              Assign
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  handleAssignButtonOnClick() {
    console.log("Assign this Officer: " + this.state.caseID);
    Axios.put(`http://localhost:2567/server/assignedTo/${this.state.caseID}`, {
      assignedTo: this.state.assignOfficer,
    })
      .then((res) => {
        this.componentWillMount();
        this.render();
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleCaseStatus(statusID) {
    switch (statusID) {
      case 1:
        return <Table.Cell className="tab_cell_green">New</Table.Cell>;
      case 2:
        return <Table.Cell className="tab_cell_orange">Open</Table.Cell>;
      case 3:
        return <Table.Cell className="tab_cell_teal">Pending</Table.Cell>;
      case 4:
        return <Table.Cell className="tab_cell_grey">Closed</Table.Cell>;
      case 5:
        return <Table.Cell className="tab_cell_red">Overdue</Table.Cell>;
      default:
        return <Table.Cell></Table.Cell>;
    }
  }

  timeExtract(time) {
    return <Moment format="D MMM YYYY">{time}</Moment>;
  }

  dateExtract(date) {
    let newDate = new Date();
    date = newDate.getDate(date);
    return <Table.Cell>{date}</Table.Cell>;
  }

  closeButton() {
    this.isClose(this.state.caseID);
    this.setState({ isTrue: true });
  }

  ModalClose() {
    this.setState({ modalOpen: false });
  }

  async ModalOpen(caseID) {
    this.setState({ modalOpen: true });

    this.isOpen(caseID);
  }

  isClose(caseID) {
    Axios.get(`http://localhost:2567/server/status/isclose/${caseID}`)
      .then((response) => {
        this.setState({ caseClosed: response.data });
        console.log(response.data);
        console.log(response);
        this.state.caseClosed.map((x) => {
          if (x.isClosed !== 1) {
            Axios.put(`http://localhost:2567/server/status/isclose/${caseID}`, {
              closedBy: this.state.closedBy,
            })
              .then((response) => {
                // this.ModalClose();
                this.componentWillMount();
                this.render();
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            console.log("Already Closed");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("why loop");
    // this.ModalClose();
  }

  isOpen(caseID) {
    Axios.get(`http://localhost:2567/server/status/isopen/${caseID}`)
      .then((response) => {
        this.setState({ caseOpen: response.data });
        console.log(response.data);
        console.log(response);
        this.state.caseOpen.map((x) => {
          if (x.isOpen !== 1) {
            Axios.put(`http://localhost:2567/server/status/isopen/${caseID}`, {
              openedBy: this.state.openedBy,
            })
              .then((response) => {
                // this.ModalClose();
                this.componentWillMount();
                this.render();
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            console.log("Already Opened");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleRowClick(grievance) {
    console.log(grievance);
    this.setState({
      CommunicationID: grievance.CommunicationID,
      CommunicationType: grievance.CommunicationType,
      CustomerNumber: grievance.CustomerNumber,
      CustomerName: grievance.CustomerName,
      IDNumber: grievance.IDNumber,
      PhoneContact: grievance.PhoneContact,
      EmailAddress: grievance.EmailAddress,
      IDType: grievance.IDType,
      Region: grievance.Region,
      OfficeName: grievance.OfficeName,
      SubCategory: grievance.SubCategory,
      IncidentType: grievance.IncidentType,
      IncidentTime: grievance.IncidentTime,
      IncidentArea: grievance.IncidentArea,
      VehicleNumber: grievance.VehicleNumber,
      IncidentDate: grievance.IncidentDate,
      OtherDetails: grievance.OtherDetails,
      declaration: grievance.declaration,
      linkToFile: grievance.linkToFile,
      caseID: grievance.caseID,
    });
    this.ModalOpen(grievance.caseID);
  }

  handleRowCommendationClick(commendation) {
    console.log(commendation);
    this.setState({
      CommendationID: commendation.CommendationID,
      CommunicationType: commendation.CommunicationType,
      CustomerNumber: commendation.CustomerNumber,
      CustomerName: commendation.CustomerName,
      IDNumber: commendation.IDNumber,
      PhoneContact: commendation.PhoneContact,
      EmailAddress: commendation.EmailAddress,
      IDType: commendation.IDType,
      Region: commendation.Region,
      OfficeName: commendation.OfficeName,
      StaffName: commendation.StaffName,
      CommendationDate: commendation.CommendationDate,
      CommendationReason: commendation.CommendationReason,
      caseID: commendation.caseID,
    });
    this.ModalOpen(commendation.caseID);
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
      QueryDate: enquiry.QueryDate,
      caseID: enquiry.caseID,
    });
    this.ModalOpen(enquiry.caseID);
  }

  componentWillMount() {
    Axios.get("/server/grievances")
      .then((response) => {
        this.setState({ grievances: response.data });
        console.log(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.get("/server/commendation")
      .then((response) => {
        this.setState({ commendations: response.data });
        console.log(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.get("/server/enquiries")
      .then((response) => {
        this.setState({ enquiries: response.data });
        console.log(response.data);
        console.log(response);
      })
      .catch((err) => {
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
          <Segment textAlign="center">
            <Table celled color="orange" key="orange" size="small">
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell sorted="descending">
                    Grievance ID
                  </Table.HeaderCell>
                  <Table.HeaderCell>Customer Number</Table.HeaderCell>
                  <Table.HeaderCell>Customer Name</Table.HeaderCell>
                  <Table.HeaderCell>Communication Type</Table.HeaderCell>
                  <Table.HeaderCell>Incident Time</Table.HeaderCell>
                  <Table.HeaderCell>Incident Area</Table.HeaderCell>
                  <Table.HeaderCell>Incident Date</Table.HeaderCell>
                  <Table.HeaderCell>Sub Category</Table.HeaderCell>
                  <Table.HeaderCell>Officer Assigned</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.grievances.map((gr) => (
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
                    <Table.Cell>{gr.officerAssigned}</Table.Cell>

                    {this.handleCaseStatus(gr.statusID)}
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Segment>
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
                    label="Communication Type"
                    value={this.state.CommunicationType}
                  />
                  <FormInputReadOnly
                    label="Customer Number"
                    value={this.state.CustomerNumber}
                  />
                  <FormInputReadOnly
                    label="Customer Name"
                    value={this.state.CustomerName}
                  />
                  <FormInputReadOnly
                    label="Customer ID Number"
                    value={this.state.IDNumber}
                  />
                  <FormInputReadOnly label="IDType" value={this.state.IDType} />
                  <FormInputReadOnly
                    label="Phone Contact"
                    value={this.state.PhoneContact}
                  />
                  <FormInputReadOnly
                    label="Email Address"
                    value={this.state.EmailAddress}
                  />

                  <FormInputReadOnly label="Region" value={this.state.Region} />
                  <FormInputReadOnly
                    label="Office"
                    value={this.state.OfficeName}
                  />
                  <FormInputReadOnly
                    label="Sub Category"
                    value={this.state.SubCategory}
                  />
                  <FormInputReadOnly
                    label="Type of Incident"
                    value={this.state.IncidentType}
                  />
                  <FormInputReadOnly
                    label="Time of Incident"
                    value={this.state.IncidentTime}
                  />
                  <FormInputReadOnly
                    label="Incident Area"
                    value={this.state.IncidentArea}
                  />
                  <FormInputReadOnly
                    label="Vehicle Number"
                    value={this.state.VehicleNumber}
                  />
                  <FormInputReadOnly
                    label="Incident Date"
                    value={this.state.IncidentDate}
                  />
                  <FormInputReadOnly
                    label="Other Details"
                    value={this.state.OtherDetails}
                  />

                  {/* <img
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    height="200"
                    width="200"
                  /> */}
                  {this.assignOfficerGrievance()}
                  <Image
                    src="http://localhost:2567/images/images/test.jpg"
                    fluid
                  />
                  <Image fluid />
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              {/* <Button
                disabled={this.state.isTrue}
                onClick={this.closeButton}
                color="red"
              >
                Close Case
              </Button> */}
              <Button onClick={this.closeButton} color="red">
                Close Case
              </Button>
            </Modal.Actions>
          </Modal>
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
          <Segment textAlign="center">
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
                  <Table.HeaderCell>Officer Assigned</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.commendations.map((gr) => (
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
                    <Table.Cell>{gr.officerAssigned}</Table.Cell>
                    {this.handleCaseStatus(gr.statusID)}
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
                      label="Commendation ID"
                      value={this.state.CommendationID}
                    />
                    <FormInputReadOnly
                      label="Communication Type"
                      value={this.state.CommunicationType}
                    />
                    <FormInputReadOnly
                      label="Customer Number"
                      value={this.state.CustomerNumber}
                    />
                    <FormInputReadOnly
                      label="Customer Name"
                      value={this.state.CustomerName}
                    />
                    <FormInputReadOnly
                      label="Customer ID Number"
                      value={this.state.IDNumber}
                    />
                    <FormInputReadOnly
                      label="IDType"
                      value={this.state.IDType}
                    />
                    <FormInputReadOnly
                      label="Phone Contact"
                      value={this.state.PhoneContact}
                    />
                    <FormInputReadOnly
                      label="Email Address"
                      value={this.state.EmailAddress}
                    />

                    <FormInputReadOnly
                      label="Region"
                      value={this.state.Region}
                    />
                    <FormInputReadOnly
                      label="Office"
                      value={this.state.OfficeName}
                    />
                    <FormInputReadOnly
                      label="Commended Staff"
                      value={this.state.StaffName}
                    />
                    <FormInputReadOnly
                      label="Date of Commendation"
                      value={this.state.CommendationDate}
                    />
                    <FormInputReadOnly
                      label="Reason for Commendation"
                      value={this.state.CommendationReason}
                    />
                    {this.assignOfficerGrievance()}
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.closeButton} color="red">
                  Close Case
                </Button>
              </Modal.Actions>
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
          <Segment textAlign="center">
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
                  <Table.HeaderCell>Officer Assigned</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.enquiries.map((gr) => (
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
                    <Table.Cell>{gr.officerAssigned}</Table.Cell>
                    {this.handleCaseStatus(gr.statusID)}
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
                      label="Enquiry ID"
                      value={this.state.QueryID}
                    />
                    <FormInputReadOnly
                      label="Communication Type"
                      value={this.state.CommunicationType}
                    />
                    <FormInputReadOnly
                      label="Customer Number"
                      value={this.state.CustomerNumber}
                    />
                    <FormInputReadOnly
                      label="Customer Name"
                      value={this.state.CustomerName}
                    />
                    <FormInputReadOnly
                      label="Customer ID Number"
                      value={this.state.IDNumber}
                    />
                    <FormInputReadOnly
                      label="IDType"
                      value={this.state.IDType}
                    />
                    <FormInputReadOnly
                      label="Phone Contact"
                      value={this.state.PhoneContact}
                    />
                    <FormInputReadOnly
                      label="Email Address"
                      value={this.state.EmailAddress}
                    />

                    <FormInputReadOnly
                      label="Region"
                      value={this.state.Region}
                    />
                    <FormInputReadOnly
                      label="Office"
                      value={this.state.OfficeName}
                    />
                    <FormInputReadOnly
                      label="Enquiry Details"
                      value={this.state.QueryDetails}
                    />
                    <FormInputReadOnly
                      label="Enquiry Date"
                      value={this.state.QueryDate}
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
        <Button
          floated="right"
          color="orange"
          onClick={() => {
            auth.logout(() => {
              this.props.history.push("/login");
            });
          }}
        >
          Logout
        </Button>
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
