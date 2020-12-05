import React, { useEffect, useState } from "react";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import { bindActionCreators } from "redux";
import {
  getAllUsers,
  getIssueDetails,
  updateIssue,
} from "../../../shared/state";
import { connect } from "react-redux";
import { useParams } from "react-router";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import { useForm } from "react-hook-form";
import Form from "reactstrap/es/Form";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import "draft-js/dist/Draft.css";
import { Editor, EditorState, convertToRaw } from "draft-js";

const OrganismsTaskDetail = (props) => {
  const { register, handleSubmit, errors, setValue } = useForm();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  let { id } = useParams();

  useEffect(() => {
    props.actions.getTaskDetail(id);
    props.actions.getAllUsers();
  }, [props.actions]);

  useEffect(() => {
    if (props.issueDetails) {
      setValue("assigneeId", props.issueDetails.assignee.id);
      setValue("description", props.issueDetails.description);
      setValue("issueStatus", props.issueDetails.issueStatus);
      setEditorState(() =>
        EditorState.createWithText(props.issueDetails.details || "")
      );
    }
  }, [props.issueDetails]);

  const statuses = ["OPEN", "CLOSED", "RESOLVED", "IN_PROGRESS"];

  const submitForm = (formData) => {
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");
    props.actions
      .updateIssue({
        ...formData,
        details: value,
        id,
        projectId: props.issueDetails.project.id,
      })
      .then(() => props.actions.getTaskDetail(id));
  };

  const onChange = () => {};

  return (
    <div>
      <Container>
        <Row>
          <Col sm="9">
            <Row>
              <Col sm="6">
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
                          <option key={user.id} value={user.id}>
                            {user.nameSurname}
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
              </Col>
            </Row>
            <Button color="primary" onClick={handleSubmit(submitForm)}>
              Save Changes
            </Button>
          </Col>
          <Col sm="3" className="mt-3">
            <ListGroup>
              {props.issueDetails?.issueHistories.map((history) => {
                return (
                  <ListGroupItem>
                    Issue Changed <br />
                    Description: {history.description}
                    <br />
                    Status: {history.issueStatus}
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    issueDetails: state.issue.issueDetails,
    users: state.utils.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getTaskDetail: bindActionCreators(getIssueDetails, dispatch),
      getAllUsers: bindActionCreators(getAllUsers, dispatch),
      updateIssue: bindActionCreators(updateIssue, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganismsTaskDetail);
