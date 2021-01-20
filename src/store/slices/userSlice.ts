import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Profile {
  id: number
  name: string
}

interface UserState {
  profile: Profile | null
}

const initialState: UserState = { profile: null }

/* eslint-disable no-param-reassign */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Profile>) {
      state.profile = action.payload
    },
  },
})
/* eslint-enable no-param-reassign */

export default userSlice.reducer
