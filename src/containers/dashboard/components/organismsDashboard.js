import React, { useEffect } from "react";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import MoleculesDashboardIssueTable from "./moleculesDashboardIssueTable";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getDashboardOpenIssues } from "../../../shared/state/actions";

const OrganismsDashboard = (props) => {
  useEffect(() => {
    props.actions.getDashboardOpenIssues({
      userId: localStorage.getItem("userId"),
    });
  }, [props.actions]);

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

const mapStateToProps = (state) => {
  return {
    openIssues: state.issueReducer.dashboardOpenIssues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getDashboardOpenIssues: bindActionCreators(
        getDashboardOpenIssues,
        dispatch
      ),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganismsDashboard);
