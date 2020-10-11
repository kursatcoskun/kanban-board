import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const AtomsNavbarBrand = (props) => {
  return (
    <div>
      <NavbarBrand href={props.href}>{props.brandText}</NavbarBrand>
    </div>
  );
};

export default AtomsNavbarBrand;
