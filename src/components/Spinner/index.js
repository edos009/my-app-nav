import React, { useContext } from "react";
import { ThemeContext } from "../../contexts";
import cx from "classnames";

import CONSTANTS from "../../constants";

import styles from "./Spinner.module.scss";

const { THEMES } = CONSTANTS;

const Spinner = () => {
  const [theme] = useContext(ThemeContext);

  const stylesSpinner = cx(styles.loader, {
    [styles.light_color]: theme === THEMES.LIGHT,
    [styles.dark_color]: theme === THEMES.DARK,
  });

  return <div className={stylesSpinner}></div>;
};

export default Spinner;
