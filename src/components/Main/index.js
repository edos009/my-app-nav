import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import cx from "classnames";
import { ThemeContext } from "../../contexts";
import CONSTANTS from "../../constants";

import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import SignIn from "./SignIn";

import styles from "../../App.module.scss";

const {THEMES} = CONSTANTS;

const Main = (props) => {
  const [theme] = useContext(ThemeContext)
  const { onSubmit } = props;

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
        <Route path="/login" element={<SignIn onSubmit={onSubmit} />} />
      </Routes>
    </main>
  );
};

export default Main;
