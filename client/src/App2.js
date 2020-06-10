import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import axios from "axios";
//import "./axys";
//import "../node_modules/materialize-css/dist/css/materialize.min.css";
//import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Navbar from "./components/layout/Navbar1";
import About from "./components/about";
import Home from "./components/home";
import Services from "./components/services";
//import Projects from "./pages/Projects";
import Book from "./components/Projects";

//axios.defaults.baseURL = "http://localhost:4000/fcc_rest_api2";
//"https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Book} />
      </div>
    </Router>
  );
}

export default App;

<button onClick={() => setBook("Dictionary")}></button>;
