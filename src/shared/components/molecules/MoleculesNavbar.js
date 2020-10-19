import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler } from "reactstrap";
import AtomsNavbarBrand from "../atoms/atomsNavbarBrand";
import AtomsNavItem from "../atoms/atomsNavItem";
import AtomsButton from "../atoms/atomsButton";
import PropTypes from "prop-types";

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
            <AtomsNavItem text="Dashboard" href="/login" />
            <AtomsNavItem text="Projects" href="/login" />
            <AtomsNavItem text="Issues" href="/login" />
          </Nav>
          <AtomsButton labelText="Login" />
        </Collapse>
      </Navbar>
    </div>
  );
};

MoleculesNavbar.propTypes = {
  color: PropTypes.string,
  light: PropTypes.bool,
  brandText: PropTypes.string,
};

export default MoleculesNavbar;
