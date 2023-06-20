// HomePage.js
import React from 'react';
import UserList from '../component/UserList';
import Form from '../component/Form';

const HomePage = ({ users, onAddUser, deleteUser }) => {
  return (
    <div>
      <h1>User Management App</h1>
       <Form addUser={onAddUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default HomePage;
