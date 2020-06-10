import React, { useContext } from "react";
import { ContactContext } from "../ContactContext";
//import Contact from "../Contact";

const Navbar = () => {
  const [contact, setContact] = useContext(ContactContext);
  return (
    <nav>
      <h4>FCC Context App</h4>
      <p>List of Contacts: {contact.length}</p>
    </nav>
  );
};

export default Navbar;
