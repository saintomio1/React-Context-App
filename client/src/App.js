import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import axios from "axios";
//import "./App.css";

import Navbary from "./components/layout/Navbary";
//import ContactList from "./components/ContactList";
//import { ContactProvider } from "./components/ContactContext";
import Projects from "./components/Projects";
import About from "./components/about";
import Home from "./components/home";
import Services from "./components/services";
import Contact from "./components/Contactus";
import Dashboard from "./components/Dashboard";
import { ContactProvider } from "./components/ContactContext";
//import Projects from "./pages/Projects";
//import Book from "./pages/Projects";

//axios.defaults.baseURL = "http://localhost:4000/fcc_rest_api2";
//"https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev";

function App() {
  return (
    <Router>
      <ContactProvider>
        <Navbary />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contactus" components={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </ContactProvider>
    </Router>
  );
}

export default App;
