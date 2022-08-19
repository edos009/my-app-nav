import { LanguageContext, ThemeContext } from "../contexts";

export const WithTheme = (InnerComponent) => (props) =>
  (
    <ThemeContext.Consumer>
      {([theme, setThemes]) => (
        <InnerComponent theme={theme} setThemes={setThemes} {...props} />
      )}
    </ThemeContext.Consumer>
  );

export const WithLanguage = (InnerComponent) => (props) =>
  (
    <LanguageContext.Consumer>
      {([language, setLanguages]) => (
        <InnerComponent
          language={language}
          setLanguages={setLanguages}
          {...props}
        />
      )}
    </LanguageContext.Consumer>
  );
