import React, {
  useState,
  useCallback,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { loadCountries } from "../../../api";
import cx from "classnames";

import Country from "./Country";
import reducer from "./reducer";
import Spinner from "../../Spinner";
import { ThemeContext } from "../../../contexts";
import CONSTANTS from "../../../constants";

import styles from "./Countries.module.scss";

const {
  THEMES,
  ACTIONS: {
    DATA_RESPONSE_SUCCESS,
    DATA_RESPONSE_ERROR,
    DATA_RESPONSE_IS_FETCHING_TRUE,
    DATA_RESPONSE_IS_FETCHING_FALSE,
    SET_CHECKED_COUNTRIES,
    SET_REMOVED_COUNTRIES,
  },
} = CONSTANTS;

const Countries = () => {
  const [value, setValue] = useState("");
  const [
    { countries, error, isFetching, checkedCountries, removedCountries },
    dispatch,
  ] = useReducer(reducer, {
    countries: [],
    error: null,
    isFetching: false,
    checkedCountries: [],
    removedCountries: [],
  });
  const [theme] = useContext(ThemeContext);
  const stylesInputSearch = cx(
    styles.main_input_search,
    {
      [styles.light_bg]: theme === THEMES.LIGHT,
      [styles.dark_bg]: theme === THEMES.DARK,
    },
    {
      [styles.light_color]: theme === THEMES.LIGHT,
      [styles.dark_color]: theme === THEMES.DARK,
    }
  );

  const load = () => {
    dispatch({ type: DATA_RESPONSE_IS_FETCHING_TRUE });
    loadCountries()
      .then((data) =>
        dispatch({ type: DATA_RESPONSE_SUCCESS, countries: data })
      )
      .catch((error) => dispatch({ type: DATA_RESPONSE_ERROR, error }))
      .finally(() => dispatch({ type: DATA_RESPONSE_IS_FETCHING_FALSE }));
  };

  useEffect(() => {
    load();
  }, []);

  const handlerChangeInput = ({ target: { value } }) => {
    setValue(value);
  };

  const checkInput = (name, isAdd) => {
    dispatch({ type: SET_CHECKED_COUNTRIES, name, isAdd });
  };

  const removeCountry = (name) => {
    dispatch({ type: SET_REMOVED_COUNTRIES, name });
  };

  const renderCountries = useCallback(
    () =>
      countries
        .filter(
          (country) =>
            (country.name.toLowerCase().includes(value.toLowerCase()) ||
              checkedCountries.includes(country.name)) &&
            !removedCountries.includes(country.name)
        )
        .map((country) => (
          <Country
            key={country.name}
            country={country}
            checkInput={checkInput}
            value={checkedCountries.includes(country.name)}
            removeCountry={removeCountry}
          />
        )),
    [countries, checkedCountries, value, removedCountries]
  );

  return (
    <>
      <input
        className={stylesInputSearch}
        type="text"
        value={value}
        onChange={handlerChangeInput}
        placeholder="Search..."
      />
      {isFetching ? (
        <Spinner />
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className={styles.main_list}>{renderCountries()}</div>
      )}
    </>
  );
};

export default Countries;
