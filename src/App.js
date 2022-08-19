import React, { useState } from "react";
import { ThemeContext, LanguageContext } from "./contexts";
import CONSTANTS from "./constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const { THEMES, LANGUAGES } = CONSTANTS;

const App = () => {
  const [theme, setTheme] = useState(THEMES.DARK);
  const [language, setLanguage] = useState(LANGUAGES.EN.LANG);

  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <LanguageContext.Provider value={[language, setLanguage]}>
          <Header />
          <Main onSubmit={onSubmit} />
          <Footer />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
