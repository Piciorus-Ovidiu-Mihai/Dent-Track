import React, { Component } from "react";
import TechniciansTable from "../components/techniciansTable";
import TreatmentDetails from "../components/treatmentDetails";
import { Col, Row, Container } from "react-bootstrap";
import TreatmentsTable from "../components/treatmentsTable";

class TechniciansTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technicians: [],
      treatments: [],
      loading: true,
      showTreatments: false,
      showDetails: false,
      showNewTreatmentForm: false,
    };
  }
  componentDidMount() {
    this.populateTechniciansData();
  }

  render() {
    let content = this.state.loading ? (
      <p>
        <em> Loading... </em>
      </p>
    ) : (
      <TechniciansTable
        onAddTreatment={this.handleOnAddTreatment}
        onViewTreatments={this.handleOnViewTreatments}
        technicians={this.state.technicians}
      />
    );
    let details = this.state.showDetails ? (
      <TreatmentDetails treatment={this.state.detailedTreatment} />
    ) : null;
    let treatments = this.state.showTreatments ? (
      <TreatmentsTable
        treatments={this.state.treatments}
        onViewDetails={this.handleViewDetails}
      />
    ) : null;

    return (
      <Container>
        {details}
        <Col>{treatments}</Col>

        <Row>
          <h1>Technicians</h1>
        </Row>
        <Row>
          <Col>{content}</Col>
        </Row>
      </Container>
    );
  }
  handleViewDetails = (id) => {
    const treatment = this.state.treatments.filter((t) => t.id === id);
    window.scrollTo(0, 0);
    this.setState({ showDetails: true, detailedTreatment: treatment[0] });
  };
  handleOnAddTreatment = (id) => {
    window.scrollTo(0, 0);
    this.setState({
      showDetails: false,
      showTreatments: false,
      showNewTreatmentForm: true,
    });
  };
  handleOnViewTreatments = (id) => {
    const treatments = this.populateTreatmentsData(id);
    window.scrollTo(0, 0);
    this.setState({
      showDetails: false,
      showTreatments: true,
      showNewTreatmentForm: false,
      treatments: treatments,
    });
  };
  populateTreatmentsData(id) {
    //aici se apeleaza serviciu rest pentru obtinerea tehnicienilor
    const raw = [
      {
        id: 1,
        technicianId: 1,
        treatmentName: "Test1",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
      {
        id: 2,
        technicianId: 2,
        treatmentName: "Test2",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
      {
        id: 3,
        technicianId: 1,
        treatmentName: "Test3",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
      {
        id: 4,
        treatmentName: "Test4",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
      {
        id: 5,
        technicianId: 1,
        treatmentName: "Test5",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
      {
        id: 6,
        technicianId: 1,
        treatmentName: "Test6",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
      {
        id: 7,
        treatmentName: "Test7",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
      {
        id: 8,
        treatmentName: "Test8",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
      {
        id: 9,
        technicianId: 1,
        treatmentName: "Test9",
        medicName: "Test",
        techicianName: "Test",
        currentStep: "1",
        deadlineCurrentStep: "1",
      },
    ];
    return raw.filter((t) => t.technicianId === id);
  }
  async populateTechniciansData() {
    //aici se apeleaza serviciu rest pentru obtinerea tehnicienilor

    this.setState({
      technicians: [
        { id: 1, firstName: "John", lastName: "Doe", noActiveTreatments: 3 },
        { id: 2, firstName: "Johny", lastName: "Doee", noActiveTreatments: 1 },
      ],
      loading: false,
    });
  }
}

export default TechniciansTab;
