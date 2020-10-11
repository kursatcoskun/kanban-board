import React from "react";
import { NavItem, NavLink } from "reactstrap";

const AtomsNavItem = (props) => {
  return (
    <div>
      <NavItem>
        <NavLink href={props.href}>{props.text}</NavLink>
      </NavItem>
    </div>
  );
};

export default AtomsNavItem;
