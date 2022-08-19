export const getUsers = (page) => {
  return fetch(
    `https://randomuser.me/api/?page=${page}&results=5&seed=bbc&nat=gb`
  ).then((res) => res.json());
};

export const loadCountries = () => {
  return fetch("https://restcountries.com/v2/all").then((res) => res.json());
};
