import React from "react";
import { NavLink } from "reactstrap";

const AtomsNavItem = (props) => {
  return <NavLink href={props.href}>{props.text}</NavLink>;
};

export default AtomsNavItem;
