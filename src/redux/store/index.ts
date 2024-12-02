import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
//Base API
import {baseApi, middleware} from '../api/baseApi';
//reducers
import {productReducer} from '@redux/slices';

const isDevMode = process.env.NODE_ENV === 'development';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  product: productReducer,
});

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat(isDevMode ? [logger, middleware] : [middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
