import React, { useState, useContext } from "react";
import Contact from "./Contact";
import { ContactContext } from "./ContactContext";
import { BookContext } from "./ContactContext";

const Projects = () => {
  const [contacts, setContacts] = useContext(ContactContext);
  const [book, setBook] = useContext(BookContext);

  return (
    <div>
      {contacts.map(contact => (
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
export default Projects;
