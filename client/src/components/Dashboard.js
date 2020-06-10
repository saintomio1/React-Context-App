import React from "react";
import "../App.css";
import ContactList from "./ContactList";
//import { ContactProvider } from "./ContactContext";
import AddContact from "./AddContact";

const Home = () => {
  return (
    <div className="App">
      <AddContact />
      <ContactList />
    </div>
  );
};

export default Home;
