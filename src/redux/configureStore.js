import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import { missionReducer } from './missions/missions';
import { dragonReducer } from './dragons/dragon';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
    dragons: dragonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
