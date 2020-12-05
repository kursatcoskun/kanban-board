import React, { useEffect, useState } from "react";
import MoleculesProjectsTable from "./moleculesProjectsTable";
import Container from "reactstrap/es/Container";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AtomsButton from "../../../shared/components/atoms/atomsButton";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import { Modal, Tag } from "antd";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import { useForm } from "react-hook-form";
import {
  createProject,
  getAllProjects,
  removeProject,
} from "../../../shared/state/actions";

const OrganismsProjects = (props) => {
  const [visible, setModalVisibility] = useState(false);

  const [deleteVisible, setDeleteModalVisibility] = useState(false);

  const [selectedRecord, setSelectedRecord] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    props.actions.getAllProjects();
  }, [props.actions]);

  const showModal = () => {
    setModalVisibility(true);
  };

  const showDeleteModal = () => {
    setDeleteModalVisibility(true);
  };

  const handleOk = (formData) => {
    props.actions.createProject(formData).then((response) => {
      if (response.payload) {
        props.actions.getAllProjects();
      }
    });
    setModalVisibility(false);
  };

  const handleCancel = (e) => {
    setModalVisibility(false);
  };

  const clickDeleteAction = (data) => {
    setSelectedRecord(data);
    showDeleteModal();
  };

  const deleteRow = () => {
    props.actions.removeProject(selectedRecord.id).then(() => {
      props.actions.getAllProjects();
      setDeleteModalVisibility(false);
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
    {
      key: "action",
      title: "Actions",
      render: (text, record) => (
        <Tag color="geekblue" onClick={() => clickDeleteAction(record)}>
          Delete
        </Tag>
      ),
    },
  ];

  return (
    <div>
      <Container>
        <br />
        <Row>
          <Col sm="5" />
          <Col sm="5" />
          <Col sm="2">
            <AtomsButton
              color="primary"
              labelText="Add Project"
              click={showModal}
            />
          </Col>
        </Row>

        <br />
        <MoleculesProjectsTable columns={columns} dataSource={props.projects} />

        <Modal
          title="Delete Project"
          visible={deleteVisible}
          onOk={deleteRow}
          onCancel={handleCancel}
        >
          Are you this record will removed ?
        </Modal>

        <Modal
          title="Add Project"
          visible={visible}
          onOk={handleSubmit(handleOk)}
          onCancel={handleCancel}
        >
          <Form>
            <FormGroup>
              <Label for="projectName">Project Name</Label>
              <Input
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Enter Project Name..."
                invalid={!!errors.projectName}
                innerRef={register({
                  required: true,
                })}
              />
              {errors?.projectName?.type === "required" && (
                <span role="alert">Mandatory Field</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="projectCode">Project Code</Label>
              <Input
                type="text"
                id="projectCode"
                name="projectCode"
                placeholder="Enter Project Code..."
                invalid={!!errors.projectCode}
                innerRef={register({
                  required: true,
                })}
              />
              {errors?.projectCode?.type === "required" && (
                <span role="alert">Mandatory Field</span>
              )}
            </FormGroup>
          </Form>
        </Modal>
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
      createProject: bindActionCreators(createProject, dispatch),
      removeProject: bindActionCreators(removeProject, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganismsProjects);
