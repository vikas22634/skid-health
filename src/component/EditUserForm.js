import React, { useState } from "react";

function EditUserForm({ user, updateUser }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    updateUser({ ...user, name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Edit user</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <button type="submit">Update User</button>
    </form>
  );
}

export default EditUserForm;
