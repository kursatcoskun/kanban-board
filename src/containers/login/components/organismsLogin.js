import React from "react";
import { useForm } from "react-hook-form";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import Label from "reactstrap/es/Label";
import Button from "reactstrap/es/Button";

const OrganismsLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
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
                name="email"
                placeholder="Enter Username..."
                invalid={!!errors.email}
                innerRef={register({
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors?.email?.type === "pattern" && (
                <span role="alert">{errors.email.message}</span>
              )}
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

export default OrganismsLogin;
