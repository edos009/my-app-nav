import React, { useState, useEffect } from "react";
import { getUsers } from "../../../api";
import { PageContext } from "../../../contexts";
import BtnControlPages from "./BtnControlPages";
import UserList from "./UserList/index";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  const load = (page) => {
    setIsFetching(true);
    getUsers(page)
      .then((data) => setUsers(data.results))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    load(page);
  }, [page]);

  return (
    <>
      {isFetching ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <>
          <UserList users={users} />
          <PageContext.Provider value={[setPage]}>
            <BtnControlPages />
          </PageContext.Provider>
        </>
      )}
    </>
  );
};

export default Users;
