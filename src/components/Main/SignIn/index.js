import React from "react";
import { WithLanguage, WithTheme } from "../../../HOCs";
import cx from "classnames";
import CONSTANTS from "../../../constants";
import styles from "./SignIn.module.scss";
import SignInForm from "../../Forms/SignInForm";

const { THEMES, LANGUAGES } = CONSTANTS;

const SignIn = (props) => {
  const { theme, language, onSubmit } = props;

  const stylesContainer = cx(styles.main_box, {
    [styles.light_color]: theme === THEMES.LIGHT,
    [styles.dark_color]: theme === THEMES.DARK,
  });
  return (
    <div className={styles.container}>
      <div className={stylesContainer}>
        <div className={styles.main_box}>
          {language === LANGUAGES.EN.LANG
            ? LANGUAGES.EN.PAGE.SIGN_IN.TITLE
            : LANGUAGES.UK.PAGE.SIGN_IN.TITLE}
          <SignInForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default WithTheme(WithLanguage(SignIn));
