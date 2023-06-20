import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditUserForm from "../component/EditUserForm";

const EditUserPage = ({ users, updateUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const selectedUser = users.find((user) => user.id === id);
    setUser(selectedUser);
  }, [id, users]);

  const handleUpdate = (updatedUser) => {
    updateUser(updatedUser);
    navigate("/");
  };

  return (
    <div>
      {user ? (
        <EditUserForm user={user} updateUser={handleUpdate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditUserPage;
