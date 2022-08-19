import React, { useContext } from "react";
import { ThemeContext, LanguageContext } from "../../../contexts";
import cx from "classnames";
import CONSTANTS from "../../../constants";

import styles from "./Home.module.scss";
import Countries from "../Countries";

const { THEMES, LANGUAGES } = CONSTANTS;

const Home = () => {
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
              {LANGUAGES.EN.PAGE.HOME.TITLE}
            </h1>
          ) : (
            <h1 className={styles.main_title}>
              {LANGUAGES.UK.PAGE.HOME.TITLE}
            </h1>
          )}
          <Countries />
        </div>
      </div>
    </>
  );
};

export default Home;
