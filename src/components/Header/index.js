import React, { Component } from "react";
import cx from "classnames";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { WithLanguage, WithTheme } from "../../HOCs";
import styles from '../../App.module.scss';
import CONSTANTS from "../../constants";
import Logo from './Logo';
import Navigation from "./Navigation";

const { THEMES, LANGUAGES } = CONSTANTS;

class Header extends Component {
  render() {
    const { theme, language, setTheme, setLanguages } = this.props;

    const stylesContainer = cx({
      [styles.light_bg]: theme === THEMES.LIGHT,
      [styles.dark_bg]: theme === THEMES.DARK,
    });

    const handlerClickTheme = () => {
      const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
      setTheme(newTheme);
    };

    const stylesBtnLanguages = cx(styles.btn_languages, {
      [styles.light_color]: theme === THEMES.LIGHT,
      [styles.dark_color]: theme === THEMES.DARK,
    });

    const handlerClickLanguages = () => {
      const newLanguage =
        language === LANGUAGES.EN.LANG ? LANGUAGES.UK.LANG : LANGUAGES.EN.LANG;
      setLanguages(newLanguage);
    };

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
  }
}

export default WithTheme(WithLanguage(Header));
