// UserCard.js
import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user, deleteUser }) => {
  const handleDelete = () => {
    // Pass the user id to delete
    deleteUser(user.id);
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link className="edit" to={`/edit/${user.id}`}>
        Edit
      </Link>
    </div>
  );
};

export default UserCard;
