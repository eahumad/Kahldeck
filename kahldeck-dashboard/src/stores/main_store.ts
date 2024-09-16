import { configureStore } from '@reduxjs/toolkit'
import layoutListReducer  from '../features/layout_list/layoutListSlice' 
import layoutReducer from './layout_slice';

const store = configureStore({
  reducer: {
    layoutReduce: layoutReducer,
    layoutList: layoutListReducer,
    // layoutView: layoutViewReducer,
    // kahlButton: kahlButtonReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type MainState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store