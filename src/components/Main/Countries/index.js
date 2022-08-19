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
import CONSTANTS from "../../../constants";

import styles from "./Countries.module.scss";
import Spinner from "../../Spinner";
import { ThemeContext } from "../../../contexts";

const { THEMES } = CONSTANTS;

const Countries = () => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    countries: [],
    error: null,
    isFetching: false,
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
    dispatch({ type: "DATA_RESPONSE_IS_FETCHING", isFetching: true });
    loadCountries()
      .then((data) =>
        dispatch({ type: "DATA_RESPONSE_SUCCESS", countries: data })
      )
      .catch((error) => dispatch({ type: "DATA_RESPONSE_ERROR", error }))
      .finally(() =>
        dispatch({ type: "DATA_RESPONSE_IS_FETCHING", isFetching: false })
      );
  };

  useEffect(() => {
    load();
  }, []);

  const handlerChangeInput = ({ target: { value } }) => {
    setValue(value);
  };

  const renderCountries = useCallback(
    () =>
      state.countries
        .filter((country) =>
          country.name.toLowerCase().includes(value.toLowerCase())
        )
        .map((country) => <Country country={country} key={country.name} />),
    [state.countries, value]
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
      {state.isFetching ? (
        <Spinner />
      ) : state.error ? (
        <div>Error</div>
      ) : (
        <div className={styles.main_list}>{renderCountries()}</div>
      )}
    </>
  );
};

export default Countries;
