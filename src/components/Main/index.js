import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Contacts from "./Contacts";
import styles from "../../App.module.scss";
import { WithLanguage, WithTheme } from "../../HOCs";
import CONSTANTS from "../../constants";
import cx from 'classnames';

const {THEMES} = CONSTANTS;

const Main = (props) => {
  const { theme } = props;

  const stylesContainer = cx({
    [styles.light_bg_main]: theme === THEMES.LIGHT,
    [styles.dark_bg_main]: theme === THEMES.DARK,
  });

  return (
    <main className={stylesContainer}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
  );
};

export default WithTheme(WithLanguage(Main));