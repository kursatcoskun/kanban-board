import React, { useEffect } from "react";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import { bindActionCreators } from "redux";
import { getIssueDetails } from "../../../shared/state/actions";
import { connect } from "react-redux";
import {useParams} from "react-router";

const OrganismsTaskDetail = (props) => {
    let { id } = useParams();
  useEffect(() => {

    props.actions.getTaskDetail(id);
  }, [props.actions]);

  return (
    <div>
      <Container>
        <Row>
          <Col sm="9"></Col>
          <Col sm="3">Task History Section</Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    issueDetails: state.issue.issueDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getTaskDetail: bindActionCreators(getIssueDetails, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganismsTaskDetail);
