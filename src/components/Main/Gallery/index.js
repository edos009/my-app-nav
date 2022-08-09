import React from "react";
import { WithLanguage, WithTheme } from "../../../HOCs";
import cx from "classnames";
import CONSTANTS from "../../../constants";
import styles from "./Gallery.module.scss";

const { THEMES, LANGUAGES } = CONSTANTS;

const Gallery = (props) => {
  const { theme, language } = props;

  const stylesContainer = cx(styles.main_box, {
    [styles.light_color]: theme === THEMES.LIGHT,
    [styles.dark_color]: theme === THEMES.DARK,
  });
  return (
    <div className={styles.container}>
      <div className={stylesContainer}>
        <div className={styles.main_box}>
          {language === LANGUAGES.EN.LANG
            ? LANGUAGES.EN.PAGE.GALLERY.TITLE
            : LANGUAGES.UK.PAGE.GALLERY.TITLE}
        </div>
      </div>
    </div>
  );
};

export default WithTheme(WithLanguage(Gallery));
