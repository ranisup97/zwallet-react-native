import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AsyncStorage from '@react-native-community/async-storage'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['Auth'] //kesimpen semua data kecuali yang ada dilists
  // whiltelist: ['Auth', 'Favorites'] //kesimpen  data hanya dilists

}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
  let persistor = persistStore(store)
  return { store, persistor }
}