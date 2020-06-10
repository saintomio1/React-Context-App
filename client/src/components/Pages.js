import React from "react";
import "../App.css";
import ContactList from "./ContactList";
import { ContactProvider } from "./ContactContext";
import AddContact from "./AddContact";
import Contactus from "./Contactus";
import Navbary from "./layout/Navbary";
import Projects from "./Projects";

const Pages = () => {
  return (
    <ContactProvider>
      <div className="App">
        <Navbary />
        <AddContact />
        <ContactList />
        <Contactus />
        <Projects />
      </div>
    </ContactProvider>
  );
};

export default Pages;
