import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeContext, LanguageContext } from "./contexts";
import CONSTANTS from "./constants";
import Home from "./components/Main/Home";
import Gallery from "./components/Main/Gallery";
import About from "./components/Main/About";
import Contacts from "./components/Main/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer/index";

const { THEMES, LANGUAGES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.DARK,
      language: LANGUAGES.EN.LANG,
    };
  }

  setTheme = (theme) => {
    this.setState({ theme });
  };

  setLanguages = (language) => {
    this.setState({ language });
  };

  render() {
    const { theme, language } = this.state;
    return (
      <>
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          <LanguageContext.Provider value={[language, this.setLanguages]}>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
            <Footer />
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
