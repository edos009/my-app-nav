import React from "react";
import UserItem from "../UserItem";

const UserList = ({ users }) => {

  const setUserList = users.map((user) => (
    <li key={user.login.uuid}>
      <UserItem user={user} />
    </li>
  ));

  return <ul>{setUserList}</ul>;
};

export default UserList;
