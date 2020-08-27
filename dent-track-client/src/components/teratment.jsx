import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Treatment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr key={this.props.treatment.id}>
        <td>{this.props.treatment.treatmentName}</td>
        <td>{this.props.treatment.medicName}</td>
        <td>{this.props.treatment.techicianName}</td>
        <td>{this.props.treatment.currentStep}</td>
        <td>{this.props.treatment.deadlineCurrentStep}</td>
        <td>
          <Button
            onClick={() => {
              this.props.onViewDetails(this.props.treatment.id);
            }}
          >
            Details
          </Button>
        </td>
      </tr>
    );
  }
}

export default Treatment;
