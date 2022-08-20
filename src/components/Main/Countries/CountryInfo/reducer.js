import CONSTANTS from "../../../../constants";

const {
  DATA_RESPONSE_SUCCESS,
  DATA_RESPONSE_ERROR,
  DATA_RESPONSE_IS_FETCHING_TRUE,
  DATA_RESPONSE_IS_FETCHING_FALSE,
} = CONSTANTS.ACTIONS;

const reducer = (state, action) => {
  switch (action.type) {
    case DATA_RESPONSE_SUCCESS: {
      const { country } = action;

      return {
        ...state,
        country,
      };
    }

    case DATA_RESPONSE_ERROR: {
      const { error } = action;

      return {
        ...state,
        error,
      };
    }

    case DATA_RESPONSE_IS_FETCHING_TRUE: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case DATA_RESPONSE_IS_FETCHING_FALSE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
