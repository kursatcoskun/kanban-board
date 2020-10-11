import React from "react";
import Button from "reactstrap/lib/Button";

const AtomsButton = (props) => {
  return (
    <div>
      <Button color={props.color} onClick={props.click}>{props.labelText}</Button>
    </div>
  );
};

export default AtomsButton;
