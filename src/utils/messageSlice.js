import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: null,
  reducers: {
    addMessage: (state, action) => {
      return action.payload
    }
  }
})

export const {addMessage} = messageSlice.actions
export default messageSlice.reducer