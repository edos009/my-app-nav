import React from "react";

const UserItem = ({ user } ) => {
  const {
    name: { first, last },
    location: { country, city },
    email,
    picture: { large },
  } = user;

  return (
    <>
      <img src={large} alt={first} />
      <h2>
        {first} {last}
      </h2>
      <p>{country}</p>
      <p>{city}</p>
      <p>{email}</p>
    </>
  );
};

export default UserItem;
