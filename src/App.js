import React from "react";
import "./App.css";
import { AtomsParagraph } from "./shared";
import { AtomsHeader } from "./shared/components/atoms/atomsHeader";

function App() {
  return (
    <div className="App">
      <AtomsParagraph textColor="blue">Deneme</AtomsParagraph>
      <AtomsHeader textColor="blue">Deneme</AtomsHeader>
    </div>
  );
}

export default App;
