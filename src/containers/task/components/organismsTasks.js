import React, { useEffect } from "react";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import AtomsButton from "../../../shared/components/atoms/atomsButton";
import MoleculesProjectsTable from "../../project/components/moleculesProjectsTable";
import { bindActionCreators } from "redux";
import { getAllIssues } from "../../../shared/state";
import { connect } from "react-redux";
import { Tag } from "antd";

const OrganismsTasks = (props) => {
  useEffect(() => {
    props.actions.getAllIssues(localStorage.getItem("userId").toString());
  }, [props.actions]);

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
      title: "Actions",
      render: (text, record) => (
          <div>
            <Tag color="geekblue" onClick={() => clickDetail(record)}>
              Edit
            </Tag>

            <Tag color="geekblue" onClick={() => clickDetail(record)}>
              Delete
            </Tag>
          </div>

      ),
    },
  ];

  const clickDetail = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Container>
        <br />
        <Row>
          <Col sm="5" />
          <Col sm="5" />
          <Col sm="2">
            <AtomsButton color="primary" labelText="Create Task" />
          </Col>
        </Row>

        <br />
        <MoleculesProjectsTable
          columns={columns}
          dataSource={props.issues.map((data) => ({
            ...data,
            projectName: data.project.projectName,
          }))}
        />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    issues: state.issue.allIssues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getAllIssues: bindActionCreators(getAllIssues, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganismsTasks);
