import React, { Component } from "react";
import styles from "../../App.module.scss";
import cx from "classnames";
import CONSTANTS from "../../constants";
import { WithLanguage, WithTheme } from "../../HOCs";

const { THEMES, LANGUAGES } = CONSTANTS;

class Footer extends Component {
  render() {
    const { theme, language } = this.props;
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
  }
}

export default WithTheme(WithLanguage(Footer));
