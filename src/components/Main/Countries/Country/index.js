import React, { useContext } from "react";
import cx from "classnames";

import { ThemeContext } from "../../../../contexts";
import CONSTANTS from "../../../../constants";

import styles from "../Countries.module.scss";

const { THEMES } = CONSTANTS;

const Country = (props) => {
  const { name, flags, population, region, capital } = props.country;

  const [theme] = useContext(ThemeContext);

  const stylesCountryItem = cx(styles.main_item, {
    [styles.light_bg]: theme === THEMES.LIGHT,
    [styles.dark_bg]: theme === THEMES.DARK,
  });

  const stylesBorderColor = cx({
    [styles.light_border_color]: theme === THEMES.LIGHT,
    [styles.dark_border_color]: theme === THEMES.DARK,
  });

  return (
    <article className={stylesCountryItem}>
      <div className={styles.main_box_img}>
        <img className={styles.main_img} src={flags.png} alt={name} />
      </div>
      <div className={styles.main_box_info}>
        <h3 className={styles.main_name}>{name}</h3>
        <p className={styles.main_capital}>
          Capital: <span className={stylesBorderColor}>{capital}</span>
        </p>
        <p className={styles.main_region}>
          Region: <span className={stylesBorderColor}>{region}</span>
        </p>
        <p className={styles.main_population}>
          Population: <span className={stylesBorderColor}>{population}</span>
        </p>
      </div>
    </article>
  );
};

export default Country;
