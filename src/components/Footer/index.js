import React, { useContext } from "react";
import styles from "../../App.module.scss";
import cx from "classnames";
import CONSTANTS from "../../constants";
import { ThemeContext, LanguageContext } from "../../contexts";

const { THEMES, LANGUAGES } = CONSTANTS;

const Footer = () => {
  const [theme] = useContext(ThemeContext);
  const [language] = useContext(LanguageContext);
  
  const stylesContainer = cx(
    {
      [styles.light_bg]: theme === THEMES.LIGHT,
      [styles.dark_bg]: theme === THEMES.DARK,
    },
    {
      [styles.light_color]: theme === THEMES.LIGHT,
      [styles.dark_color]: theme === THEMES.DARK,
    }
  );

  return (
    <footer className={stylesContainer}>
      <div className={styles.container}>
        <div className={styles.footer}>
          {language === LANGUAGES.EN.LANG
            ? LANGUAGES.EN.FOOTER
            : LANGUAGES.UK.FOOTER}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
