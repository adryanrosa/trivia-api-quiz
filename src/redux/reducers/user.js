import { ADD_NAME, ADD_ASSERTION, ADD_POINTS, RESET_POINTS } from '../actions';

const INITIAL_STATE = ({
  name: '',
  assertions: 0,
  points: 0,
});

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_NAME:
    return {
      ...state,
      name: action.payload,
    };

  case ADD_ASSERTION:
    return {
      ...state,
      assertions: state.assertions + 1,
    };

  case ADD_POINTS:
    return {
      ...state,
      points: state.points + action.payload,
    };

  case RESET_POINTS:
    return {
      ...state,
      points: 0,
    };

  default: return state;
  }
};

export default user;
