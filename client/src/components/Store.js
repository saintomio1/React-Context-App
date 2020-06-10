import React, { useState } from "react";

export const BookContext = React.createContext("Bible");
export const PenContext = React.createContext("Rollerpen");
export const DesignContext = React.createContext("Architectural");
export const BuildContext = React.createContext("Construction");

const Store = ({ children }) => {
  const [book, setBook] = useState("Bible");
  const [pen, setPen] = useState("Rollerpen");
  const [design, setDesign] = useState("Architectural");
  const [build, setBuild] = useState("Construction");

  return (
    <BookContext.Provider value={[book, setBook]}>
      <PenContext.Provider value={[pen, setPen]}>
        <DesignContext.Provider value={[design, setDesign]}>
          <BuildContext.Provider value={[build, setBuild]}>
            {children}
          </BuildContext.Provider>
        </DesignContext.Provider>
      </PenContext.Provider>
    </BookContext.Provider>
  );
};

export default Store;
