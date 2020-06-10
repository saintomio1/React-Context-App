import React, { useState, useContext } from "react";
import Contact from "./Contact";
import { ContactContext } from "./ContactContext";
import { BookContext } from "./ContactContext";

const ContactList = () => {
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
      <h4>The best book is {book}</h4>
      <h4>We have {contacts.length} contact in our list</h4>
    </div>
  );
};
export default ContactList;
