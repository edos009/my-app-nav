import React, { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  const { clientX, clientY } = action;
  const newState = {
    ...state,
    x: clientX,
    y: clientY,
  };

  return newState;
};

const CoordinationWindow = () => {
  const [state, dispatch] = useReducer(reducer, { x: 0, y: 0 });

  const handlerMouseMove = (event) => {
    const action = { clientX: event.clientX, clientY: event.clientY };
    dispatch(action);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlerMouseMove);

    return () => {
      window.removeEventListener("mousemove", handlerMouseMove);
    };
  }, []);

  return (
    <p>
      Coordinates: x: {state.x}, y: {state.y}
    </p>
  );
};

export default CoordinationWindow;
