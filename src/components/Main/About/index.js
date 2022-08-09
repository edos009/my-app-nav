import React from "react";
import { WithLanguage, WithTheme } from "../../../HOCs";
import cx from "classnames";
import CONSTANTS from "../../../constants";
import styles from "./About.module.scss";

const { THEMES, LANGUAGES } = CONSTANTS;

const About = (props) => {
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
    <div className={styles.container}>
      <div className={stylesContainer}>
        <div className={styles.main_box}>
          {language === LANGUAGES.EN.LANG
            ? LANGUAGES.EN.PAGE.ABOUT.TITLE
            : LANGUAGES.UK.PAGE.ABOUT.TITLE}
        </div>
      </div>
    </div>
  );
};

export default WithTheme(WithLanguage(About));
