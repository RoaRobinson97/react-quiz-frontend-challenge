import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface TokenValue {}
const initialState: TokenValue = {}

export const authSlice = createSlice({
  initialState,
  name: 'token',
  reducers: {
    setToken: (state, action: PayloadAction<any>) => {
      state = action.payload
    },
  },
})

export default authSlice.reducer
