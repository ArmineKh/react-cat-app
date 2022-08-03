import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import catReducer from './slices/catSlice'

const reducer = combineReducers({
  catReducer,
})

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})