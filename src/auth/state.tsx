import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface State {}

const initialState: State = {}

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state = action.payload
    },
  },
})

export const { setUser } = authSlice.actions

export default authSlice.reducer
