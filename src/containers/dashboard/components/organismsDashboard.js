import React, { useEffect } from "react";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import MoleculesDashboardIssueTable from "./moleculesDashboardIssueTable";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import {
  getDashboardDoneIssues,
  getDashboardOpenIssues,
  getDashboardProgressIssues,
} from "../../../shared/state/actions";
import { Space, Tag } from "antd";

const OrganismsDashboard = (props) => {
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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
      sortDirections: ["descend"],
    },
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
      render: (text, record) => (
        <Space size="middle">
          <Tag color="geekblue">Detail</Tag>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Row>
        <Col sm="4">
          <MoleculesDashboardIssueTable
            message="OPEN"
            type="info"
            dataSource={openIssues.map((issue) => ({
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
