import { configureStore } from "@reduxjs/toolkit";
import messageReducer from './messageSlice'

const appStore = configureStore({
  reducer: {
    message: messageReducer
  }
})

export default appStore