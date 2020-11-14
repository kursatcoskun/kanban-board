import React from "react";
import OrganismsDashboard from "./organismsDashboard";
import Container from "reactstrap/es/Container";

const DashboardPage = () => {
  return (
    <div>
      <Container>
        <OrganismsDashboard />
      </Container>
    </div>
  );
};

export default DashboardPage;
