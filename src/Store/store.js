import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducer"



// configureStore.js
 
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducer'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
  let store = configureStore({
    reducer: persistedReducer,});
 
let persistor = persisitedReducer(store)
 export {persist,store}
