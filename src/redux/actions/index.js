export const ADD_NAME = 'ADD_NAME';

export const ADD_ASSERTION = 'ADD_ASSERTION';
export const ADD_POINTS = 'ADD_POINTS';

export const DECREASE_TIME = 'DECREASE_TIME';
export const RESET_TIME = 'RESET_TIME';

export const SET_OVER = 'SET_OVER';

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
});

export const addAssertion = () => ({
  type: ADD_ASSERTION,
});

export const addPoints = (points) => ({
  type: ADD_POINTS,
  payload: points,
});

export const decreaseTime = () => ({
  type: DECREASE_TIME,
});

export const resetTime = () => ({
  type: RESET_TIME,
});

export const setOver = (bool) => ({
  type: SET_OVER,
  payload: bool,
});
