import React, { useEffect } from "react";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import { bindActionCreators } from "redux";
import { getAllUsers, getIssueDetails } from "../../../shared/state/actions";
import { connect } from "react-redux";
import { useParams } from "react-router";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import { useForm } from "react-hook-form";
import Form from "reactstrap/es/Form";
import { Button } from "reactstrap";

const OrganismsTaskDetail = (props) => {
  const { register, handleSubmit, errors, control, setValue } = useForm();

  let { id } = useParams();

  useEffect(() => {
    props.actions.getTaskDetail(id);
    props.actions.getAllUsers();
  }, [props.actions]);

  useEffect(() => {
    if (props.issueDetails) {
      setValue("assignee", props.issueDetails.assignee.id);
      setValue("taskTitle", props.issueDetails.description);
    }
  }, [props.issueDetails]);

  const submitForm = (formData) => {
    console.log(formData);
  };

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
                      name="assignee"
                      placeholder="Enter Project Code..."
                      invalid={!!errors.assignee}
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
                    <Label for="taskTitle">Task Title</Label>
                    <Input
                      type="text"
                      id="taskTitle"
                      name="taskTitle"
                      invalid={!!errors.taskTitle}
                      innerRef={register({
                        required: true,
                      })}
                    />
                    {errors?.taskTitle?.type === "required" && (
                      <span role="alert">Mandatory Field</span>
                    )}
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Button color="primary" onClick={handleSubmit(submitForm)}>
              Save Changes
            </Button>
          </Col>
          <Col sm="3">Task History Section</Col>
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
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganismsTaskDetail);
