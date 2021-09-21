import { SET_CATEGORY, SET_DIFFICULTY } from '../actions';

const INITIAL_STATE = ({
  category: '',
  difficulty: '',
});

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CATEGORY:
    return {
      ...state,
      category: action.payload,
    };

  case SET_DIFFICULTY:
    return {
      ...state,
      difficulty: action.payload,
    };

  default: return state;
  }
};

export default settings;
