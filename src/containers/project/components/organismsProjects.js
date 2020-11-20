import React, { useEffect } from "react";
import MoleculesProjectsTable from "./moleculesProjectsTable";
import Container from "reactstrap/es/Container";
import { bindActionCreators } from "redux";
import { getAllProjects } from "../../../shared/state/actions";
import { connect } from "react-redux";
import { Tag } from "antd";

const OrganismsProjects = (props) => {
  useEffect(() => {
    props.actions.getAllProjects();
  }, [props.actions]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
      sortDirections: ["descend"],
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      sorter: (a, b) => a.projectName.length - b.projectName.length,
      sortDirections: ["descend"],
    },
    {
      title: "Project Code",
      dataIndex: "projectCode",
      sorter: (a, b) => a.projectCode.length - b.projectCode.length,
      sortDirections: ["descend"],
    },
  ];

  return (
    <div>
      <Container>
        <MoleculesProjectsTable columns={columns} dataSource={props.projects} />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.project.allProjects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getAllProjects: bindActionCreators(getAllProjects, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganismsProjects);
