import React, { useEffect } from "react";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import MoleculesDashboardIssueTable from "./moleculesDashboardIssueTable";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getDashboardDoneIssues,
  getDashboardOpenIssues,
  getDashboardProgressIssues,
} from "../../../shared/state/actions";
import { Space, Tag } from "antd";
import {useHistory} from "react-router-dom";

const OrganismsDashboard = (props) => {
  const history = useHistory();

  useEffect(() => {
    getDashboardIssues();
  }, [props.actions]);

  const getDashboardIssues = () => {
    props.actions.getDashboardOpenIssues({
      userId: localStorage.getItem("userId"),
    });
    props.actions.getDashboardProgressIssues({
      userId: localStorage.getItem("userId"),
    });
    props.actions.getDashboardDoneIssues({
      userId: localStorage.getItem("userId"),
    });
  };

  const clickDetail = (data) => {
    history.push(`/task/detail/${data.id}`);
  }

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ["descend"],
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      sorter: (a, b) => a.projectName.length - b.projectName.length,
      sortDirections: ["descend"],
    },
    {
      key: "action",
      title: "Actions",
      render: (text, record) => <Tag color="geekblue" onClick={() => clickDetail(record)}>Detail</Tag>,
    },
  ];

  return (
    <div>
      <br />
      <Row>
        <Col sm="4">
          <MoleculesDashboardIssueTable
            message="OPEN"
            type="info"
            dataSource={props.openIssues.map((issue) => ({
              ...issue,
              projectName: issue.project.projectName,
            }))}
            columns={columns}
          />
        </Col>
        <Col sm="4">
          <MoleculesDashboardIssueTable
            message="IN PROGRESS"
            type="warning"
            dataSource={props.progressIssues.map((issue) => ({
              ...issue,
              projectName: issue.project.projectName,
            }))}
            columns={columns}
          />
        </Col>
        <Col sm="4">
          <MoleculesDashboardIssueTable
            message="DONE"
            type="success"
            dataSource={props.doneIssues.map((issue) => ({
              ...issue,
              projectName: issue.project.projectName,
            }))}
            columns={columns}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openIssues: state.issue.dashboardOpenIssues,
    progressIssues: state.issue.dashboardProgressIssues,
    doneIssues: state.issue.dashboardDoneIssues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getDashboardOpenIssues: bindActionCreators(
        getDashboardOpenIssues,
        dispatch
      ),
      getDashboardProgressIssues: bindActionCreators(
        getDashboardProgressIssues,
        dispatch
      ),
      getDashboardDoneIssues: bindActionCreators(
        getDashboardDoneIssues,
        dispatch
      ),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganismsDashboard);
