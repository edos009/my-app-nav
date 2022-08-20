const CONSTANTS = {
  THEMES: {
    LIGHT: "LIGHT",
    DARK: "DARK",
  },
  LANGUAGES: {
    EN: {
      LANG: "EN",
      LOGO: "Logo",
      NAV: [
        { to: "/", title: "Home" },
        { to: "/countries", title: "Geography" },
        { to: "/about", title: "About" },
        { to: "/login", title: "Sign In" },
      ],
      PAGE: {
        HOME: { TITLE: "Home" },
        COUNTRIES: { TITLE: "Countries" },
        ABOUT: { TITLE: "About" },
        SIGN_IN: { TITLE: "Sign In" },
      },
      FOOTER: "Tiutiunnyk Eduard | @2022",
    },
    UK: {
      LANG: "UK",
      LOGO: "Лого",
      NAV: [
        { to: "/", title: "Дім" },
        { to: "/countries", title: "Географія" },
        { to: "/about", title: "О нас" },
        { to: "/contacts", title: "Увійти" },
      ],
      PAGE: {
        HOME: { TITLE: "Дім" },
        COUNTRIES: { TITLE: "Країни" },
        ABOUT: { TITLE: "О нас" },
        SIGN_IN: { TITLE: "Увійти" },
      },
      FOOTER: "Тютюнник Едуард | @2022",
    },
  },
  ACTIONS: {
    DATA_RESPONSE_SUCCESS: "DATA_RESPONSE_SUCCESS",
    DATA_RESPONSE_ERROR: "DATA_RESPONSE_ERROR",
    DATA_RESPONSE_IS_FETCHING_TRUE: "DATA_RESPONSE_IS_FETCHING_TRUE",
    DATA_RESPONSE_IS_FETCHING_FALSE: "DATA_RESPONSE_IS_FETCHING_FALSE",
    SET_CHECKED_COUNTRIES: "SET_CHECKED_COUNTRIES",
    SET_REMOVED_COUNTRIES: "SET_REMOVED_COUNTRIES",
  },
};

export default CONSTANTS;
