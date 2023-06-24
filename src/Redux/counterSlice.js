import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginData: {},
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    login: (state, action) => {
      state.loginData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
const counterActions = counterSlice.actions
const counterReducer = counterSlice.reducer

export { counterActions, counterReducer}