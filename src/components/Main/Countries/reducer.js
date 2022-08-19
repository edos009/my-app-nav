const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_RESPONSE_SUCCESS": {
      const { countries } = action;

      const newState = {
        ...state,
        countries,
      };

      return newState;
    }

    case "DATA_RESPONSE_ERROR": {
      const { error } = action;

      const newState = {
        ...state,
        error,
      };
      return newState;
    }

    case "DATA_RESPONSE_IS_FETCHING": {
      const { isFetching } = action;

      const newState = {
        ...state,
        isFetching,
      };
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
