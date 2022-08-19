import React, { useContext } from "react";
import cx from "classnames";
import CONSTANTS from "../../../constants";
import styles from "./About.module.scss";
import { ThemeContext, LanguageContext } from "../../../contexts";

const { THEMES, LANGUAGES } = CONSTANTS;

const About = () => {
  const [theme] = useContext(ThemeContext);
  const [language] = useContext(LanguageContext);

  const stylesContainer = cx(styles.main_box, {
    [styles.light_color]: theme === THEMES.LIGHT,
    [styles.dark_color]: theme === THEMES.DARK,
  });
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

export default About;
