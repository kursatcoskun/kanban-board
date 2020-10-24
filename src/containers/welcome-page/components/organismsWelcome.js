import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Container from "reactstrap/es/Container";
import { Link } from "react-router-dom";

const OrganismsWelcome = () => {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-4">Welcome KAN-BAN Board APP</h1>
          <p className="lead">
            You can ensure your projects and the progress of the tasks in your
            projects through this application.
          </p>
          <hr className="my-2" />
          <p>
            KAN-BAN board application allows you to control certain status of
            your tasks.
          </p>
          <p className="lead">
            <Link to="/login">
              <Button color="primary">Login</Button>
            </Link>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default OrganismsWelcome;
