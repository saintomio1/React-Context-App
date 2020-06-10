import React, { useState, useContext } from "react";
import "../App.css";
import Contact from "./Contact";
import { ContactContext } from "./ContactContext";

const Contactus = () => {
  const [contacts, setContacts] = useContext(ContactContext);

  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          key={contact.id}
        />
      ))}
    </div>
  );
};

export default Contactus;
