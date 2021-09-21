import { combineReducers } from 'redux';

import user from './user';
import timer from './timer';
import settings from './settings';

const rootReducer = combineReducers({ user, timer, settings });

export default rootReducer;
