import React, { useState, useContext } from "react";
import { ContactContext } from "./ContactContext";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useContext(ContactContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePhone = e => {
    setPhone(e.target.value);
  };

  const addContact = e => {
    e.preventDefault();
    setContacts(prevContacts => [
      ...prevContacts,
      { name: name, email: email, phone: phone }
    ]);
  };

  return (
    <form onSubmit={addContact}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="email" name="email" value={email} onChange={updateEmail} />
      <input type="phone" name="phone" value={phone} onChange={updatePhone} />
      <button>Submit</button>
    </form>
  );
};

export default AddContact;
