import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Technician extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr key={this.props.technician.id}>
        <td>{this.props.technician.firstName}</td>
        <td>{this.props.technician.lastName}</td>
        <td>{this.props.technician.noActiveTreatments}</td>
        <td>
          <Button
            onClick={() => {
              this.props.onAddTreatment(this.props.technician.id);
            }}
          >
            Add Treatment
          </Button>
        </td>
        <td>
          <Button
            onClick={() => {
              this.props.onViewTreatments(this.props.technician.id);
            }}
          >
            View Treatments
          </Button>
        </td>
      </tr>
    );
  }
}

export default Technician;
