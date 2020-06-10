import React, { useState } from "react";
//import Home from "./home";
import Store from "./Store";
//import dayjs from "dayjs";

//export const BookContext = React.createContext("Bible");
//export const PenContext = React.createContext("Rollerpen");

const Books = () => (
  <Store>
    <home />
    <ourservices />
  </Store>
);

export default Books;
