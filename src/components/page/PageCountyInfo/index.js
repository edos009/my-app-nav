import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts";
import cx from "classnames";
import CONSTANTS from "../../../constants";

import CountryInfo from "../../Main/Countries/CountryInfo";

import styles from "./PageCountryInfo.module.scss";

const { THEMES } = CONSTANTS;

const PageCountryInfo = () => {
  const [theme] = useContext(ThemeContext);

  const stylesContainer = cx(styles.main, {
    [styles.light_color]: theme === THEMES.LIGHT,
    [styles.dark_color]: theme === THEMES.DARK,
  });
  return (
    <>
      <div className={styles.container}>
        <div className={stylesContainer}>
          <CountryInfo/>
        </div>
      </div>
    </>
  );
};

export default PageCountryInfo;
