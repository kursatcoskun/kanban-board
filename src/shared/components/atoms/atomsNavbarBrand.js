import React from "react";
import { NavbarBrand } from "reactstrap";

const AtomsNavbarBrand = (props) => {
  return (
    <div>
      <NavbarBrand href={props.href}>{props.brandText}</NavbarBrand>
    </div>
  );
};

export default AtomsNavbarBrand;
