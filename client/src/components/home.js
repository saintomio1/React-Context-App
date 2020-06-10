import React, { useState, useContext } from "react";
import Contact from "./Contact";
import "../App.css";
import { ContactContext } from "./ContactContext";
import { BookContext } from "./ContactContext";

const Home = () => {
  const [contacts, setContacts] = useContext(ContactContext);
  const [book, setBook] = useContext(BookContext);

  return (
    <div className="hm">
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
export default Home;
