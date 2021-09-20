import { DECREASE_TIME, RESET_TIME, SET_OVER } from '../actions';

const INITIAL_STATE = ({
  over: false,
  time: 30,
});

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DECREASE_TIME:
    return {
      ...state,
      time: state.time > 0 && !state.over ? state.time - 1 : state.time,
    };

  case RESET_TIME:
    return {
      ...state,
      time: 30,
    };

  case SET_OVER:
    return {
      ...state,
      over: action.payload,
    };

  default: return state;
  }
};

export default timer;
