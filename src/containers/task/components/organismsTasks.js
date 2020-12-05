import React, { useEffect, useState } from "react";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import AtomsButton from "../../../shared/components/atoms/atomsButton";
import MoleculesProjectsTable from "../../project/components/moleculesProjectsTable";
import { bindActionCreators } from "redux";
import {
  createIssue,
  getAllIssues,
  getAllProjects,
  getAllUsers,
} from "../../../shared/state";
import { connect } from "react-redux";
import { Modal, Tag } from "antd";
import { useHistory } from "react-router-dom";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import { convertToRaw, Editor, EditorState } from "draft-js";
import { useForm } from "react-hook-form";

const OrganismsTasks = (props) => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const [visible, setModalVisibility] = useState(false);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    props.actions.getAllIssues(localStorage.getItem("userId").toString());
    props.actions.getAllProjects();
    props.actions.getAllUsers();
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

  const handleOk = (formData) => {
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");
    props.actions
      .createIssue({ ...formData, details: value })
      .then((response) => {
        if (response && response?.payload) {
          props.actions.getAllIssues(localStorage.getItem("userId"));
          setModalVisibility(false);
        }
      });
  };

  const handleCancel = (e) => {
    setModalVisibility(false);
  };

  const clickDetail = (data) => {
    history.push(`/task/detail/${data.id}`);
  };

  const showModal = () => {
    setModalVisibility(true);
  };

  const statuses = ["OPEN", "CLOSED", "RESOLVED", "IN_PROGRESS"];

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
              labelText="Create Task"
              click={showModal}
            />
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

      <Modal
        title="Create Task"
        visible={visible}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCancel}
      >
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Assignee</Label>
            <Input
              type="select"
              name="assigneeId"
              placeholder="select assignee..."
              invalid={!!errors.assigneeId}
              innerRef={register({
                required: true,
              })}
              id="exampleSelect"
            >
              {props.users.map((user) => {
                return (
                  <option key={user.id} value={+user.id}>
                    {user.nameSurname}
                  </option>
                );
              })}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="projectId">Project</Label>
            <Input
              type="select"
              name="projectId"
              placeholder="select assignee..."
              invalid={!!errors.projectId}
              innerRef={register({
                required: true,
              })}
              id="projectId"
            >
              {props.projects.map((project) => {
                return (
                  <option key={project.id} value={+project.id}>
                    {project.projectName}
                  </option>
                );
              })}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Issue Status</Label>
            <Input
              type="select"
              name="issueStatus"
              placeholder="Select issue status..."
              invalid={!!errors.issueStatus}
              innerRef={register({
                required: true,
              })}
              id="issueStatus"
            >
              {statuses.map((status) => {
                return (
                  <option key={status} value={status}>
                    {status}
                  </option>
                );
              })}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Task Title</Label>
            <Input
              type="text"
              id="description"
              name="description"
              invalid={!!errors.description}
              innerRef={register({
                required: true,
              })}
            />
            {errors?.description?.type === "required" && (
              <span role="alert">Mandatory Field</span>
            )}
          </FormGroup>
          <FormGroup>
            <Editor
              placeholder="Please enter task details here..."
              editorState={editorState}
              name="details"
              invalid={!!errors.details}
              innerRef={register({
                required: true,
              })}
              onChange={setEditorState}
            />
          </FormGroup>
        </Form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    issues: state.issue.allIssues,
    projects: state.project.allProjects,
    users: state.utils.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getAllIssues: bindActionCreators(getAllIssues, dispatch),
      getAllProjects: bindActionCreators(getAllProjects, dispatch),
      getAllUsers: bindActionCreators(getAllUsers, dispatch),
      createIssue: bindActionCreators(createIssue, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganismsTasks);
