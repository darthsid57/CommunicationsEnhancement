import React, { Component } from "react";
import { Table, Segment, Modal, Form } from "semantic-ui-react";
import Axios from "axios";
import "./comm.css";
import FormInputReadOnly from "./components/FormInputReadOnly";

class ViewPageInternal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grievances: [],
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
      declaration: ""
    };

    this.ModalClose = this.ModalClose.bind(this);
    this.ModalOpen = this.ModalOpen.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
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
      IdNumber: grievance.IdNumber,
      phoneContact: grievance.PhoneContact,
      emailAddress: grievance.EmailAddress,
      IdType: grievance.IDType,
      region: grievance.Region,
      office: grievance.OfficeName,
      SubCategory: grievance.SubCategory,
      LocationOfIncident: grievance.IncidentArea,
      typeofIncident: grievance.IncidentType,
      timeofIncident: grievance.IncidentTime,
      incidentArea: grievance.incidentArea,
      vehicleNumber: grievance.VehicleNumber,
      incidentDate: grievance.IncidentDate,
      otherDetails: grievance.OtherDetails,
      declaration: grievance.declaration,
      linkToFile: grievance.linkToFile
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
  }

  render() {
    return (
      <div>
        <Segment compact>
          <Table celled color="orange" key="orange" size="small">
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell sorted="descending">
                  Grievance ID
                </Table.HeaderCell>
                <Table.HeaderCell>CustomerNumber</Table.HeaderCell>
                <Table.HeaderCell>CustomerName</Table.HeaderCell>
                <Table.HeaderCell>PhoneContact</Table.HeaderCell>
                <Table.HeaderCell>EmailAddress</Table.HeaderCell>
                <Table.HeaderCell>Region</Table.HeaderCell>
                <Table.HeaderCell>OfficeName</Table.HeaderCell>
                <Table.HeaderCell>IDType</Table.HeaderCell>
                <Table.HeaderCell>IDNumber</Table.HeaderCell>
                <Table.HeaderCell>CommunicationType</Table.HeaderCell>
                <Table.HeaderCell>IncidentType</Table.HeaderCell>
                <Table.HeaderCell>CustomerNumber</Table.HeaderCell>
                <Table.HeaderCell>IncidentTime</Table.HeaderCell>
                <Table.HeaderCell>IncidentArea</Table.HeaderCell>
                <Table.HeaderCell>IncidentDate</Table.HeaderCell>
                <Table.HeaderCell>SubCategory</Table.HeaderCell>
                <Table.HeaderCell>CustomerNumber</Table.HeaderCell>
                <Table.HeaderCell>VehicleNumber</Table.HeaderCell>
                <Table.HeaderCell>OtherDetails</Table.HeaderCell>
                <Table.HeaderCell>declaration</Table.HeaderCell>
                <Table.HeaderCell>linkToFile</Table.HeaderCell>
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
                  <Table.Cell>{gr.PhoneContact}</Table.Cell>
                  <Table.Cell>{gr.EmailAddress}</Table.Cell>
                  <Table.Cell>{gr.Region}</Table.Cell>
                  <Table.Cell>{gr.OfficeName}</Table.Cell>
                  <Table.Cell>{gr.IDType}</Table.Cell>
                  <Table.Cell>{gr.IDNumber}</Table.Cell>
                  <Table.Cell>{gr.CommunicationType}</Table.Cell>
                  <Table.Cell>{gr.IncidentType}</Table.Cell>
                  <Table.Cell>{gr.IncidentTime}</Table.Cell>
                  <Table.Cell>{gr.IncidentArea}</Table.Cell>
                  <Table.Cell>{gr.IncidentDate}</Table.Cell>
                  <Table.Cell>{gr.SubCategory}</Table.Cell>
                  <Table.Cell>{gr.VehicleNumber}</Table.Cell>
                  <Table.Cell>{gr.OtherDetails}</Table.Cell>
                  <Table.Cell>{gr.declaration}</Table.Cell>
                  <Table.Cell>{gr.linkToFile}</Table.Cell>
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
            <Modal.Header>Update Details</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <FormInputReadOnly
                    label="Grievance ID"
                    value={this.state.CommunicationID}
                  />
                  <FormInputReadOnly
                    label="CustomerNumber"
                    value={this.state.clientNumber}
                  />
                  <FormInputReadOnly
                    label="PhoneContact"
                    value={this.state.IdNumber}
                  />
                  <FormInputReadOnly
                    label="EmailAddress"
                    value={this.state.phoneContact}
                  />
                  <FormInputReadOnly
                    label="Region"
                    value={this.state.emailAddress}
                  />
                  <FormInputReadOnly
                    label="OfficeName"
                    value={this.state.IdType}
                  />
                  <FormInputReadOnly label="IDType" value={this.state.region} />
                  <FormInputReadOnly
                    label="IDNumber"
                    value={this.state.office}
                  />
                  <FormInputReadOnly
                    label="CommunicationType"
                    value={this.state.SubCategory}
                  />
                  <FormInputReadOnly
                    label="CommunicationType"
                    value={this.state.LocationOfIncident}
                  />
                  <FormInputReadOnly
                    label="IncidentType"
                    value={this.state.IncidentType}
                  />
                  <FormInputReadOnly
                    label="IncidentTime"
                    value={this.state.IncidentTime}
                  />
                  <FormInputReadOnly
                    label="Grievance ID"
                    value={this.state.EmailAddress}
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

export default ViewPageInternal;
