import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginData: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    login: (state, action) => {
      state.loginData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = counterSlice.actions

export default counterSlice.reducer