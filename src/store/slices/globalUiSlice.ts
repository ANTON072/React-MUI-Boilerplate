import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface GlobalUiState {
  sidebar: {
    open: boolean
  }
}

const initialState: GlobalUiState = {
  sidebar: {
    open: false,
  },
}

/* eslint-disable no-param-reassign */
const globalUiSlice = createSlice({
  name: "globalUi",
  initialState,
  reducers: {
    /** サイドバーの開閉 */
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.sidebar.open = action.payload
    },
  },
})
/* eslint-enable no-param-reassign */

export const { toggleSidebar } = globalUiSlice.actions

export default globalUiSlice.reducer
