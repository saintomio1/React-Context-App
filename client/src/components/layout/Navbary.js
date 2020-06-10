import React, { useState, useContext } from "react";
//import Contact from "../Contact";
import { ContactContext } from "../ContactContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Navbary = () => {
  const [contacts, setContacts] = useContext(ContactContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navStyle = {
    color: "rgb(40, 145, 197)"
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={navStyle} href="https://www.firstcostconceptz.com">
          FCC Strategy
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/contactus">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.fcc.firstcostconceptz.com">
                FCC-2
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Explore
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/about">About Us</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/services">Our portfolio</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/projects">Our Projects</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="dashboard">Dashboard</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Close</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText> List of Contacts: {contacts.length}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbary;

// import React, { useContext } from "react";
// import { ContactContext } from "../ContactContext";
// //import Contact from "../Contact";

// const Navbary = () => {
//   const [contacts, setContact] = useContext(ContactContext);
//   return (
//     <nav>
//       <h4>FCC Context App</h4>
//       <p>List of Contacts: {contacts.length}</p>
//     </nav>
//   );
// };

// export default Navbary;
