import thunk from 'redux-thunk';
import Reducers from './Reducers';
import {persistReducer, persistStore, createMigrate} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import migration, {storeVersion} from './migration';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
export const persistConfig = {
  key: 'burji-user-storage-root',
  storage: AsyncStorage,
  version: storeVersion,
  debug: __DEV__,
  blacklist: ['GeneralReducer'],
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(
    {
      [storeVersion]: migration,
    },
    {debug: __DEV__},
  ),
};
const persistedReducer = persistReducer(persistConfig, Reducers);
export default store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
