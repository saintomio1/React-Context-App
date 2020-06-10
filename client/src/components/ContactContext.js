import React, { useState, createContext } from "react";

export const BookContext = createContext();
export const ContactContext = createContext();

export const BookProvider = props => {
  const [book, setBook] = useState("Dictionary");
};

export const ContactProvider = props => {
  const [contact, setContact] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "jsmith@test.com",
      phone: "123456789"
    },
    {
      id: 2,
      name: "ABCD",
      email: "abcd@test.com",
      phone: "987654321"
    },
    {
      id: 3,
      name: "Tyrion",
      email: "tyrion@test.com",
      phone: "123412345"
    }
  ]);

  const [book, setBook] = useState("Holy Bible");

  return (
    <ContactContext.Provider value={[contact, setContact]}>
      <BookContext.Provider value={[book, setBook]}>
        {props.children}
      </BookContext.Provider>
    </ContactContext.Provider>
  );
};
