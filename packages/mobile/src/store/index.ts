import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import { authReducer } from './slices';

const rootReducer = combineReducers({
  auth: authReducer,
});
/**
 * Redux Setting
 */
const persistConfig = {
  key: 'root',
  blacklist: ['app'],
  storage: AsyncStorage,
};

let middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  // middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
