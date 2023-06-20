import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditUserPage from "./component/EditUserPage";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    user.id = Date.now().toString();
    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) =>
        user.id === newUser.id ? { ...user, ...newUser } : user
      )
    );
  };

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                users={users}
                onAddUser={addUser}
                deleteUser={deleteUser}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={<EditUserPage users={users} updateUser={updateUser} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
