// UserList.js
import React from 'react';

import UserCard from './UserCard';

const UserList = ({ users, deleteUser }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li className="user-item"> 
        <UserCard key={user.id} user={user} deleteUser={deleteUser} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
