import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler } from "reactstrap";
import AtomsNavbarBrand from "../atoms/atomsNavbarBrand";
import AtomsNavItem from "../atoms/atomsNavItem";
import AtomsButton from "../atoms/atomsButton";
import PropTypes from "prop-types";
import NavbarText from "reactstrap/es/NavbarText";

const MoleculesNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color={props.color}
        light={props.light}
        dark={!props.light}
        expand="md"
      >
        <AtomsNavbarBrand brandText={props.brandText} href="/" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <AtomsNavItem text="Dashboard" href="/dashboard" />
            <AtomsNavItem text="Projects" href="/projects" />
            <AtomsNavItem text="Issues" href="/issues" />
          </Nav>
          {!props.loggedUserExist ? (
            <AtomsButton labelText="Login" />
          ) : (
            <NavbarText>{props.username}</NavbarText>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

MoleculesNavbar.propTypes = {
  color: PropTypes.string,
  light: PropTypes.bool,
  brandText: PropTypes.string,
  loggedUserExist: PropTypes.bool,
  username: PropTypes.string,
};

export default MoleculesNavbar;
