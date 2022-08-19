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
        { to: "/gallery", title: "Gallery" },
        { to: "/about", title: "About" },
        { to: "/login", title: "Sign In" },
      ],
      PAGE: {
        HOME: { TITLE: "Countries" },
        GALLERY: { TITLE: "Gallery" },
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
        { to: "/gallery", title: "Галерея" },
        { to: "/about", title: "О нас" },
        { to: "/contacts", title: "Увійти" },
      ],
      PAGE: {
        HOME: { TITLE: "Країни" },
        GALLERY: { TITLE: "Галерея" },
        ABOUT: { TITLE: "О нас" },
        SIGN_IN: { TITLE: "Увійти" },
      },
      FOOTER: "Тютюнник Едуард | @2022",
    },
  },
};

export default CONSTANTS;
