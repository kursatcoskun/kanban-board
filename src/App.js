import React from "react";
import "./App.css";
import MoleculesNavbar from "./shared/components/molecules/MoleculesNavbar";

function App() {
  return (
    <div>
      <MoleculesNavbar color="primary" light={false} brandText="KANBAN-BOARD" />
    </div>
  );
}

export default App;
