import React, { useContext } from "react";
import { ThemeContext, LanguageContext } from "../../../contexts";
import cx from "classnames";
import CONSTANTS from "../../../constants";

import Countries from "../Countries";

import styles from "./PageCountry.module.scss";

const { THEMES, LANGUAGES } = CONSTANTS;

const PageCountry = () => {
  const [theme] = useContext(ThemeContext);
  const [language] = useContext(LanguageContext);

  const stylesContainer = cx(styles.main, {
    [styles.light_color]: theme === THEMES.LIGHT,
    [styles.dark_color]: theme === THEMES.DARK,
  });
  return (
    <>
      <div className={styles.container}>
        <div className={stylesContainer}>
          {language === LANGUAGES.EN.LANG ? (
            <h1 className={styles.main_title}>
              {LANGUAGES.EN.PAGE.COUNTRIES.TITLE}
            </h1>
          ) : (
            <h1 className={styles.main_title}>
              {LANGUAGES.UK.PAGE.COUNTRIES.TITLE}
            </h1>
          )}
          <Countries />
        </div>
      </div>
    </>
  );
};

export default PageCountry;
