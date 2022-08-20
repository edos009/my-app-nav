import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadCountry } from "../../../../api";
import CONSTANTS from "../../../../constants";
import reducer from "./reducer";
import Spinner from "../../../Spinner";

const {
  ACTIONS: {
    DATA_RESPONSE_SUCCESS,
    DATA_RESPONSE_ERROR,
    DATA_RESPONSE_IS_FETCHING_TRUE,
    DATA_RESPONSE_IS_FETCHING_FALSE,
  },
} = CONSTANTS;

const CountryInfo = () => {
  const { id } = useParams();
  const [{ country, error, isFetching }, dispatch] = useReducer(reducer, {
    country: {},
    error: null,
    isFetching: false,
  });

  useEffect(() => {
    dispatch({ type: DATA_RESPONSE_IS_FETCHING_TRUE });
    loadCountry(id)
      .then((data) => {
        dispatch({ type: DATA_RESPONSE_SUCCESS, country: data[0] });
      })
      .catch((error) => dispatch({ type: DATA_RESPONSE_ERROR, error }))
      .finally(() => dispatch({ type: DATA_RESPONSE_IS_FETCHING_FALSE }));
  }, [id]);

  const { name, flags, capital, region, population } = country;

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : error ? (
        <div>Error</div>
      ) : (
        <div>
          <img src={flags?.svg} alt={name} />
          <h1>{name}</h1>
          <p>{capital}</p>
          <p>{region}</p>
          <p>{population}</p>
        </div>
      )}
    </>
  );
};

export default CountryInfo;
