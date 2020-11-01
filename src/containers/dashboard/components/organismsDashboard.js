import React from "react";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import MoleculesDashboardIssueTable from "./moleculesDashboardIssueTable";

const OrganismsDashboard = () => {
  return (
    <div>
      <Row>
        <Col sm="4">
          <MoleculesDashboardIssueTable message="OPEN" type="info" />
        </Col>
        <Col sm="4">
          <MoleculesDashboardIssueTable message="IN PROGRESS" type="warning" />
        </Col>
        <Col sm="4">
          <MoleculesDashboardIssueTable message="DONE" type="success" />
        </Col>
      </Row>
    </div>
  );
};

export default OrganismsDashboard;
