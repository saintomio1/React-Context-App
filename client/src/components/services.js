import React, { useState, useContext } from "react";
//import { DesignContext, BuildContext } from "./Store";
//import { ContactContext } from "./ContactContext";
//import { BookContext } from "./ContactContext";
//import { PenContext } from "./Store";
//import dayjs from "dayjs";

const Services = () => {
  const [book, setBook] = useState("Project");

  return (
    <>
      <div>
        <h1>@ FCC we render services such as:</h1>
        <h1>We offer Top notch {book} services</h1>
        <h1>
          We have the best equipments to deliver the best {book} to finish line
        </h1>
      </div>
    </>
  );
};

export default Services;
