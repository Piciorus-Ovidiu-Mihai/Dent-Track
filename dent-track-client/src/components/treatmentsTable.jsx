import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import Treatment from "./teratment";

class TreatmentsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { treatments: props.treatments };
  }

  render() {
    return (
      <Table striped responsive>
        <thead>
          <tr>
            <th>Treatment's Name</th>
            <th>medic's Name</th>
            <th>Tehnician's Name</th>
            <th>Current Step</th>
            <th>Deadline Current Step</th>
          </tr>
        </thead>
        <tbody>
          {this.props.treatments.map((t) => (
            <Treatment
              key={t.id}
              treatment={t}
              onViewDetails={this.props.onViewDetails}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default TreatmentsTable;
