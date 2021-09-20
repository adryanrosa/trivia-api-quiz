export const ADD_NAME = 'ADD_NAME';

export const DECREASE_TIME = 'DECREASE_TIME';
export const RESET_TIME = 'RESET_TIME';

export const SET_OVER = 'SET_OVER';

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
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
