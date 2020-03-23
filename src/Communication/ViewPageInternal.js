import React, { Component } from "react";
import { Table, Segment } from "semantic-ui-react";
import Axios from "axios";
import "./comm.css";

class ViewPageInternal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grievances: []
    };
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
                <Table.Row key={gr.CommunicationID}>
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
        </Segment>
      </div>
    );
  }
}

export default ViewPageInternal;
