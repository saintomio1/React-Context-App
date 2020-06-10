import React, { useContext } from "react";
//import Navbar from "react-bootstrap/Navbar";
import { ContactContext } from "../ContactContext";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "reactstrap";

const Navbary = () => {
  const [contact, setContact] = useContext(ContactContext);
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          React-Bootstrap <p>List of Contacts: {contact.length}</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href="contactList">
                Contact Display
              </NavDropdown.Item>
              <NavDropdown.Item href="addContact">Dashboad</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="about">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navbary;
