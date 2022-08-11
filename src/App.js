import React, { Component } from "react";
import { ThemeContext, LanguageContext } from "./contexts";
import CONSTANTS from "./constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

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

  onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  }

  render() {
    const { theme, language } = this.state;
    return (
      <>
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          <LanguageContext.Provider value={[language, this.setLanguages]}>
            <Header />
            <Main onSubmit={this.onSubmit} />
            <Footer />
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
