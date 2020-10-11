import React from "react";
import MoleculesNavbar from "../shared/components/molecules/MoleculesNavbar";
import Routes from "./routes";

const LayoutContent = () => {
  return (
    <div>
      <MoleculesNavbar brandText="KANBAN-BOARD" color="primary" light="false" />
      <Routes />
    </div>
  );
};

export default LayoutContent;
