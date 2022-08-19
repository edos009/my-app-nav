import CONSTANTS from "../../../constants";

const {
  DATA_RESPONSE_SUCCESS,
  DATA_RESPONSE_ERROR,
  DATA_RESPONSE_IS_FETCHING_TRUE,
  DATA_RESPONSE_IS_FETCHING_FALSE,
  SET_CHECKED_COUNTRIES,
  SET_REMOVED_COUNTRIES,
} = CONSTANTS.ACTIONS;

const reducer = (state, action) => {
  switch (action.type) {
    case DATA_RESPONSE_SUCCESS: {
      const { countries } = action;

      return {
        ...state,
        countries,
      };
    }

    case DATA_RESPONSE_ERROR: {
      const { error } = action;

      const newState = {
        ...state,
        error,
      };
      return newState;
    }

    case DATA_RESPONSE_IS_FETCHING_TRUE: {
      const newState = {
        ...state,
        isFetching: true,
      };
      return newState;
    }

    case DATA_RESPONSE_IS_FETCHING_FALSE: {
      const newState = {
        ...state,
        isFetching: false,
      };
      return newState;
    }

    case SET_CHECKED_COUNTRIES: {
      const { name, isAdd } = action;
      let checkedCountries;

      if (isAdd) {
        checkedCountries = [...state.checkedCountries, name];
      } else {
        checkedCountries = state.checkedCountries.filter(
          (country) => country !== name
        );
      }

      return {
        ...state,
        checkedCountries,
      };
    }

    case SET_REMOVED_COUNTRIES: {
      const { name } = action;
      const removedCountries = [...state.removedCountries, name];

      return {
        ...state,
        removedCountries,
      };
    }

    default:
      return state;
  }
};

export default reducer;
