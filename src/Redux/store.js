import { configureStore, } from '@reduxjs/toolkit'
import { reducers } from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([thunk,logger])

})
