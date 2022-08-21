import React, { useReducer, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cx from "classnames";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { loadCountry } from "../../../../api";
import CONSTANTS from "../../../../constants";
import reducer from "./reducer";
import Spinner from "../../../Spinner";
import { ThemeContext } from "../../../../contexts";

import styles from "./CountryInfo.module.scss";

const {
  THEMES,
  ACTIONS: {
    DATA_RESPONSE_SUCCESS,
    DATA_RESPONSE_ERROR,
    DATA_RESPONSE_IS_FETCHING_TRUE,
    DATA_RESPONSE_IS_FETCHING_FALSE,
  },
} = CONSTANTS;

const CountryInfo = () => {
  const { id } = useParams();
  const navigateCountry = useNavigate();
  const [theme] = useContext(ThemeContext);
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

  const {
    name,
    flag,
    capital,
    region,
    population,
    languages = [],
    area,
    borders = [],
  } = country;
  const nameLanguage = languages[0]?.name;

  const stylesBtnBack = cx(
    styles.wrapper_btn_back,
    {
      [styles.light_bg]: theme === THEMES.LIGHT,
      [styles.dark_bg]: theme === THEMES.DARK,
    },
    {
      [styles.light_color]: theme === THEMES.LIGHT,
      [styles.dark_color]: theme === THEMES.DARK,
    }
  );
  const stylesBorderColor = cx({
    [styles.light_border_color]: theme === THEMES.LIGHT,
    [styles.dark_border_color]: theme === THEMES.DARK,
  });

  const setBorderCountries = (border, i) => (
    <li className={styles.wrapper_border_countries_item} key={i}>
      {border}
    </li>
  );

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className={styles.wrapper}>
          <h1 className={styles.wrapper_name}>{name}</h1>
          <div className={styles.wrapper_box_img}>
            <img className={styles.wrapper_img} src={flag} alt={name} />
          </div>
          <div className={styles.wrapper_info}>
            <p className={styles.wrapper_region}>
              Region: <span className={stylesBorderColor}>{region}</span>
            </p>
            <p className={styles.wrapper_capital}>
              Capital: <span className={stylesBorderColor}>{capital}</span>
            </p>
            {nameLanguage && (
              <p className={styles.wrapper_nameLanguage}>
                Language:{" "}
                <span className={stylesBorderColor}>{nameLanguage}</span>
              </p>
            )}
            <p className={styles.wrapper_population}>
              Population:{" "}
              <span className={stylesBorderColor}>{population}</span>
            </p>
            <p className={styles.wrapper_area}>
              Area: <span className={stylesBorderColor}>{area} km²</span>
            </p>
            <div className={styles.wrapper_border_countries}>
              {borders && (
                <>
                  <h2 className={styles.wrapper_border_countries_title}>
                    Neighboring countries:
                  </h2>
                  <ul className={styles.wrapper_border_countries_list}>
                    {borders.map(setBorderCountries)}
                  </ul>
                </>
              )}
            </div>
            <button
              className={stylesBtnBack}
              onClick={() => navigateCountry(`/countries`)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryInfo;
