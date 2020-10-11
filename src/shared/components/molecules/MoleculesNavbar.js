import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import AtomsNavbarBrand from "../atoms/atomsNavbarBrand";
import AtomsNavItem from "../atoms/atomsNavItem";
import AtomsButton from "../atoms/atomsButton";

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
            <AtomsNavItem text="Components" href="/components" />
            <AtomsNavItem
              text="GitHub"
              href="https://github.com/reactstrap/reactstrap"
            />
          </Nav>
          <AtomsButton labelText="Login"/>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MoleculesNavbar;
