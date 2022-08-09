import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import CONSTANTS from "../../../constants";
import styles from "./Logo.module.scss";
import { WithLanguage, WithTheme } from "../../../HOCs";

const { THEMES, LANGUAGES } = CONSTANTS;

const Logo = (props) => {
  const { theme, language } = props;
  const stylesContainer = cx(styles.logo, {
    [styles.light_color]: theme === THEMES.LIGHT,
    [styles.dark_color]: theme === THEMES.DARK,
  });

  return (
    <>
      <Link className={stylesContainer} to="/">
        {language === LANGUAGES.EN.LANG ? LANGUAGES.EN.LOGO : LANGUAGES.UK.LOGO}
      </Link>
    </>
  );
};

export default WithTheme(WithLanguage(Logo));
