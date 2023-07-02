import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginData: {},
}

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    login: (state, action) => {
      state.loginData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const loginAction = loginSlice.actions
export default loginSlice.reducer

