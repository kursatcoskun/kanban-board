import React from "react";
import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const AtomsNavItem = (props) => {
  return (
    <div>
      <NavItem>
        <Link to={props.href}>
          <NavLink href={props.href}>{props.text}</NavLink>
        </Link>
      </NavItem>
    </div>
  );
};

export default AtomsNavItem;
