import React, { Component } from "react";

import { Table, Button } from "react-bootstrap";
import Technician from "./technician";

class TechniciansTable extends Component {
  constructor(props) {
    super(props);
    this.state = { technicians: props.technicians };
  }
  render() {
    return (
      <Table responsive striped>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Active Treatments</th>
          </tr>
        </thead>
        <tbody>
          {this.state.technicians.map((t) => (
            <Technician
              technician={t}
              onViewTreatments={this.props.onViewTreatments}
              onAddTreatment={this.props.onAddTreatment}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default TechniciansTable;
