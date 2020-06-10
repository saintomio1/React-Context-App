import React from "react";

const Contact = ({ name, email, phone }) => {
  return (
    <div>
      <h4>{name}</h4>
      <h5>{email}</h5>
      <p>{phone}</p>
    </div>
  );
};

export default Contact;
