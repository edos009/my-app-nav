import React, { useCallback, useContext } from "react";
import { ThemeContext, LanguageContext } from "../../contexts";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CONSTANTS from "../../constants";
import cx from "classnames";

import Logo from "./Logo";
import Navigation from "./Navigation";

import styles from "../../App.module.scss";

const { THEMES, LANGUAGES } = CONSTANTS;

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [language, setLanguage] = useContext(LanguageContext);

  const stylesContainer = cx({
    [styles.light_bg]: theme === THEMES.LIGHT,
    [styles.dark_bg]: theme === THEMES.DARK,
  });
  const stylesBtnLanguages = cx(styles.btn_languages, {
    [styles.light_color]: theme === THEMES.LIGHT,
    [styles.dark_color]: theme === THEMES.DARK,
  });

  const handlerClickTheme = useCallback(() => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
  }, [theme, setTheme]);

  const handlerClickLanguages = useCallback(() => {
    const newLanguage =
      language === LANGUAGES.EN.LANG ? LANGUAGES.UK.LANG : LANGUAGES.EN.LANG;
    setLanguage(newLanguage);
  }, [language, setLanguage]);

  return (
    <header className={stylesContainer}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Logo />
          <Navigation />
          <span className={styles.btn_theme} onClick={handlerClickTheme}>
            {theme === THEMES.LIGHT ? (
              <DarkModeIcon sx={{ color: "#222" }} />
            ) : (
              <WbSunnyIcon sx={{ color: "#fff" }} />
            )}
          </span>
          {language === LANGUAGES.EN.LANG ? (
            <span
              className={stylesBtnLanguages}
              onClick={handlerClickLanguages}
            >
              {LANGUAGES.EN.LANG}
            </span>
          ) : (
            <span
              className={stylesBtnLanguages}
              onClick={handlerClickLanguages}
            >
              {LANGUAGES.UK.LANG}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
