import React from "react";
import styles from "./Home.module.scss";
import cx from "classnames";
import CONSTANTS from "../../../constants";
import { WithLanguage, WithTheme } from "../../../HOCs";

const { THEMES, LANGUAGES } = CONSTANTS;

const Home = (props) => {
  const { theme, language } = props;

  const stylesContainer = cx(
    styles.main_box,
    {
      [styles.light_bg_main]: theme === THEMES.LIGHT,
      [styles.dark_bg_main]: theme === THEMES.DARK,
    },
    {
      [styles.light_color]: theme === THEMES.LIGHT,
      [styles.dark_color]: theme === THEMES.DARK,
    }
  );
  return (
    <>
      <div className={styles.container}>
        <div className={stylesContainer}>
          {language === LANGUAGES.EN.LANG
            ? LANGUAGES.EN.PAGE.HOME.TITLE
            : LANGUAGES.UK.PAGE.HOME.TITLE}
        </div>
      </div>
    </>
  );
};

export default WithTheme(WithLanguage(Home));
