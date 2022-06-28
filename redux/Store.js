import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ConuterReducer from './ConuterSlice';

const rootReducer = combineReducers({
  counter: ConuterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
