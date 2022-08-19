import React, { useContext } from "react";
import { PageContext } from "../../../../contexts";

const BtnControlPages = () => {
  const [setPage] = useContext(PageContext);
  console.log(setPage);

  const handlerNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlerPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <button onClick={handlerPrevPage}>Prev</button>
      <button onClick={handlerNextPage}>Next</button>
    </>
  );
};

export default BtnControlPages;
