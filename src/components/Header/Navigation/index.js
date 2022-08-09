import cx from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import CONSTANTS from "../../../constants";
import { WithLanguage, WithTheme } from "../../../HOCs";
import styles from "./Navigation.module.scss";

const { THEMES, LANGUAGES } = CONSTANTS;

const Navigation = (props) => {
  const { theme, language } = props;

  const activeClassName = "nav_list_link_active";

  const config =
    language === LANGUAGES.EN.LANG ? LANGUAGES.EN.NAV : LANGUAGES.UK.NAV;

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {config.map(({ to, title }) => (
          <li className={styles.nav_list_item} key={title}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? cx(styles[activeClassName], styles.nav_list_link, {
                      [styles.light_color]: theme === THEMES.LIGHT,
                      [styles.dark_color]: theme === THEMES.DARK,
                    })
                  : cx(styles.nav_list_link, {
                      [styles.light_color]: theme === THEMES.LIGHT,
                      [styles.dark_color]: theme === THEMES.DARK,
                    })
              }
              to={to}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default WithTheme(WithLanguage(Navigation));
