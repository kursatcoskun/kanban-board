import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import Label from "reactstrap/es/Label";
import Button from "reactstrap/es/Button";
import { bindActionCreators } from "redux";
import { callLogin } from "../state";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const OrganismsLogin = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    props.actions.login(data);
  };
  useEffect(() => {
    if (!props.loginLoading) {
      history.push("/dashboard");
    }
  }, [props]);
  return (
    <Row>
      <Col sm="4" />
      <Col sm="4">
        <Card className="mt-4" body>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username..."
                invalid={!!errors.email}
                innerRef={register({
                  required: true,
                })}
              />
              {errors?.email?.type === "required" && (
                <span role="alert">Mandatory Field</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                name="password"
                type="password"
                id="password"
                invalid={!!errors.password}
                placeholder="Enter Password..."
                innerRef={register({ required: true, maxLength: 80 })}
              />
              {errors?.password?.type === "required" && (
                <span role="alert">Mandatory Field</span>
              )}
            </FormGroup>
          </Form>

          <Button onClick={handleSubmit(onSubmit)} color="primary">
            Login
          </Button>
        </Card>
      </Col>
      <Col sm="4" />
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state.auth.loginResponse,
    loginLoading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      login: bindActionCreators(callLogin, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganismsLogin);
