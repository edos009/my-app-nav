import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import cx from "classnames";
import { ThemeContext } from "../../contexts";
import CONSTANTS from "../../constants";

import Home from "./Home";
import PageCountries from "../page/PageCountries";
import About from "./About";
import SignIn from "./SignIn";

import styles from "../../App.module.scss";
import PageCountryInfo from '../page/PageCountyInfo/index';

const { THEMES } = CONSTANTS;

const Main = (props) => {
  const [theme] = useContext(ThemeContext);
  const { onSubmit } = props;

  const stylesContainer = cx({
    [styles.light_bg_main]: theme === THEMES.LIGHT,
    [styles.dark_bg_main]: theme === THEMES.DARK,
  });

  return (
    <main className={stylesContainer}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/" element={<PageCountries />} />
        <Route path="/countries/:id" element={<PageCountryInfo/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn onSubmit={onSubmit} />} />
      </Routes>
    </main>
  );
};

export default Main;
